import React, { useEffect } from "react";
import { gsap, Power4, Power2 } from "gsap";
import "../../css/gsap.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CloseMockUpIcon from "@/Components/NextArrow.jsx";

gsap.registerPlugin(ScrollTrigger);

const MockUp1 = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const iphone = document.querySelector(".iphone");
        const widgets = document.querySelectorAll(".widgets");

        gsap.set(iphone, { x: -450, rotation: 90 });
        gsap.set(widgets, { opacity: 0, scale: 0 });

        function iPhoneAnimation() {
            const tl = gsap.timeline({ defaults: { duration: 1 } });
            tl.to(iphone, { x: 0 })
                .to(iphone, { rotation: 0, scale: 0.9 })
                .to(iphone, { duration: 3, scale: 1 });
            return tl;
        }

        function widgetAnimation() {
            const tl = gsap.timeline();
            tl.to(widgets, { duration: 0, opacity: 1 });
            return tl;
        }

        const animations = [
            {
                selector: "#app-store",
                duration: 3,
                scale: 0.9,
                x: 500,
                y: 100,
                ease: Power4.easeOut,
            },
            {
                selector: "#screen-time",
                duration: 3,
                scale: 0.9,
                x: -500,
                y: -300,
                ease: Power2.easeOut,
            },
            {
                selector: "#weather",
                duration: 3,
                scale: 1.1,
                x: -400,
                y: 350,
                ease: Power4.easeOut,
            },
            {
                selector: "#payment",
                duration: 3,
                scale: 0.9,
                x: 530,
                y: -170,
                ease: Power4.easeOut,
            },
            {
                selector: "#fitness",
                duration: 3,
                scale: 1.1,
                x: -350,
                y: -100,
                ease: Power2.easeOut,
            },
            {
                selector: "#find-my",
                duration: 3,
                scale: 1.1,
                x: 400,
                y: -360,
                ease: Power4.easeOut,
            },
            {
                selector: "#calendar",
                duration: 3,
                scale: 0.9,
                x: -630,
                y: 0,
                ease: Power2.easeOut,
            },

            {
                selector: "#apple-tv",
                duration: 3,
                scale: 1,
                x: 500,
                y: 300,
                ease: Power4.easeOut,
            },
            {
                selector: "#sleep",
                duration: 3,
                scale: 0.9,
                x: 270,
                y: -50,
                ease: Power2.easeOut,
            },

        ];

        const startTime = 2;
        const masterTimeline = gsap.timeline();
        masterTimeline.add(iPhoneAnimation()).add(widgetAnimation(), startTime);

        animations.forEach((animation, index) => {
            const { selector, duration, scale, x, y, ease } = animation;
            const element = document.querySelector(selector);
            if (element) {
                masterTimeline.add(
                    gsap.to(element, { duration, scale, x, y, ease }),
                    startTime + (index % 3) / 2
                );
            } else {
                console.error(`Element not found for selector: ${selector}`);
            }
        });


        ScrollTrigger.create({
            animation: masterTimeline,
            trigger: ".animation",
            scrub: 1,
            pin: true,
            // markers: true
        });
    }, []);

    return (

        <div className="animation">
            <CloseMockUpIcon />
            <section className="animation">
                <img className="iphone" src="./images/iPhone.svg" alt=""/>

                <img
                    id="app-store"
                    className="widgets"
                    src="./images/follow_up.png"
                    alt=""
                />

                <img
                    id="screen-time"
                    className="widgets"
                    src="./images/payment-history.svg"
                    alt=""
                />
                <img
                    id="weather"
                    className="widgets"
                    src="./images/documents.svg"
                    alt=""
                />
                <img
                    id="payment"
                    className="widgets"
                    src="./images/payment.svg"
                    alt=""
                />
                <img
                    id="calendar"
                    className="widgets"
                    src="./images/calendar.svg"
                    alt=""
                />
                <img
                    id="fitness"
                    className="widgets"
                    src="./images/fllw-up.png"
                    alt=""
                />
                <img
                    id="find-my"
                    className="widgets"
                    src=""
                    alt=""
                />
                <img
                    id="sleep"
                    className="widgets"
                    src="fllw-up.png"
                    alt=""
                />
                <img
                    id="apple-tv"
                    className="widgets"
                    src="./images/explore.png"
                    alt=""
                />

            </section>

        </div>
    );
};

export default MockUp1;

