import React from 'react';
import workIcon from './work.svg';
import schoolIcon from './school.svg';
import timelineElements from './timelineElements';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

function Timeline() {
    let workIconStyles = { background: "#7EB9FF" };
    let schoolIconStyles = { background: "#f9c74f" };

    return (
        <VerticalTimeline lineColor="black">
            {
                timelineElements.map(element => {
                    let isWorkIcon = element.icon === "work";
                    // let isVolunteerIcon = element.icon === "volunteer";
                    let showButton =
                        element.buttonText !== undefined &&
                        element.buttonText !== null &&
                        element.buttonText !== "";

                    return (
                        <VerticalTimelineElement
                            key={element.id}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                            icon={<img src={isWorkIcon ? workIcon : schoolIcon} alt="timeline icon" />}
                        // iconOnClick={window.open(element.link, '_blank')}
                        >
                            <h3 className='vertical-timeline-element-title'>{element.title}</h3>
                            <h5 className='vertical-timeline-element-subtitle'>{element.location}</h5>
                            <p id="description">{element.description}</p>
                            {showButton && (
                                <a
                                    className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`}
                                    href={element.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {element.buttonText}
                                </a>
                            )}
                        </VerticalTimelineElement>
                    )

                })
            }
        </VerticalTimeline>
    );
}

export default Timeline;
