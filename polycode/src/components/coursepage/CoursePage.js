import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserCourses, updateUserCourses } from "../courses/UserCourses";

import './CoursePage.css';

const CoursePage = () => {
    const { id } = useParams();
    const course = UserCourses[id];
    const [selectedTask, setSelectedTask] = useState(null);
    const [completedTasks, setCompletedTasks] = useState([]);

    useEffect(() => {
        const selectedTaskFromStorage = localStorage.getItem("selectedTask");
        if (selectedTaskFromStorage !== null) {
            setSelectedTask(parseInt(selectedTaskFromStorage));
        }
    }, []);

    const handleTaskClick = (taskId) => {
        setSelectedTask(taskId);
        localStorage.setItem("selectedTask", taskId);
    };

    const handleNextTask = () => {
        if (selectedTask !== null && selectedTask < course.tasks.length - 1) {
            setSelectedTask(selectedTask + 1);
            localStorage.setItem("selectedTask", selectedTask + 1);
        }
    };

    const handleSend = () => {
        if (selectedTask !== null) {
            const updatedCourses = [...UserCourses];
            const updatedTask = { ...updatedCourses[id].tasks[selectedTask] };
            updatedTask.status = 1;
            updatedCourses[id].tasks[selectedTask] = updatedTask;
            updateUserCourses(updatedCourses);
            setCompletedTasks([...completedTasks, selectedTask]);
        }
    };

    const renderTask = () => {
        if (selectedTask !== null) {
            const task = course.tasks[selectedTask];
            return (
                <>
                <div className="coursepage__task">
                    <h2 className="coursepage__task--title">{`Задание №${task.id}`}</h2>
                    <p className="coursepage__description">{task.condition}</p>
                    <p className="coursepage__input">Входные данные: {task.input}</p>
                    <p className="coursepage__output">Выходные данные: {task.output}</p>
                    <form className="coursepage__form">
                        <textarea className="coursepage__textarea" placeholder="Начните вводить код здесь.."></textarea>
                        <div className="coursepage__buttons">                          
                            <div className="coursepage__button-success" onClick={handleSend}>Отправить</div>
                            <div onClick={handleNextTask} className="coursepage__button-success">Следующее задание</div>
                        </div>
                    </form>
                </div>
                <div className="coursepage__task--help">
                    <h2 className="coursepage__task--title">{task.title}</h2>
                    <p className="help-text">{task.help_text}</p>
                </div>
                </>
            );
        }
        return (
            <>
            <div>
                <div className="coursepage__description">{course.description}</div>
                <button onClick={() => handleTaskClick(0)} className="coursepage__letsgo">Приступим!</button>
                </div>
            </>
        );
    };

    const divsArray = [];
    for (let i = 0; i < course.tasks.length; i++) {
        const taskStatus = completedTasks.includes(i) ? "background-589FC2" : "";
        divsArray.push(
            <div
                className={`coursepage__tasknumber ${taskStatus}`}
                key={i}
                onClick={() => handleTaskClick(i)}
            >
                {i + 1}
            </div>
        );
    }

    return (
        <section className="coursepage">
            <h1 className="coursepage__title">{course.name}</h1>
            <ul className="coursepage__navbar">
                {divsArray}
            </ul>
            <div className="coursepage__task-container">
                {renderTask()}
            </div>
        </section>
    );
};

export default CoursePage;