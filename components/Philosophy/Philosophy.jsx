import React from "react";
import Container from "../global/Container";
import Image from "next/image";

const Philosophy = () => {
  return (
    <div>
      <Container>
        <span>OUR PHILOSOPHY</span>
        <h2>Human-centred innovation</h2>
        <div>
          <Image
            src={"/images/philosophy-poster-desktop.png"}
            alt={"Philosophy"}
            width={1600}
            height={1067}
          />
          <Image
            src={"/images/philosophy-poster-mobile.png"}
            alt={"Philosophy"}
            width={1600}
            height={1067}
          />
        </div>
        <div>
          {/* philosophy spec item */}
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 50 50"
                height="50"
                width="50"
              >
                <rect fill="#E9F3FF" rx="25" height="50" width="50"></rect>
                <path
                  fill="#0B305B"
                  d="M13.75 18.625C13.75 17.6094 14.5703 16.75 15.625 16.75H19.375C20.3906 16.75 21.25 17.6094 21.25 18.625V19.25H28.75V18.625C28.75 17.6094 29.5703 16.75 30.625 16.75H34.375C35.3906 16.75 36.25 17.6094 36.25 18.625V22.375C36.25 23.4297 35.3906 24.25 34.375 24.25H30.625C29.5703 24.25 28.75 23.4297 28.75 22.375V21.75H21.25V22.375C21.25 22.4531 21.2109 22.5312 21.2109 22.5703L24.375 26.75H28.125C29.1406 26.75 30 27.6094 30 28.625V32.375C30 33.4297 29.1406 34.25 28.125 34.25H24.375C23.3203 34.25 22.5 33.4297 22.5 32.375V28.625C22.5 28.5859 22.5 28.5078 22.5 28.4297L19.375 24.25H15.625C14.5703 24.25 13.75 23.4297 13.75 22.375V18.625Z"
                ></path>
              </svg>
            </div>
            <div>
              <h4>Full-suite solutions</h4>
              <p>
                Experience the ease of integration across various banking and
                payment functions with our comprehensive suite of solutions.
              </p>
            </div>
          </div>
          {/* philosophy spec item */}
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 50 50"
                height="50"
                width="50"
              >
                <rect fill="#E9F3FF" rx="25" height="50" width="50"></rect>
                <path
                  fill="#0B305B"
                  d="M13.75 18.625C13.75 17.6094 14.5703 16.75 15.625 16.75H19.375C20.3906 16.75 21.25 17.6094 21.25 18.625V19.25H28.75V18.625C28.75 17.6094 29.5703 16.75 30.625 16.75H34.375C35.3906 16.75 36.25 17.6094 36.25 18.625V22.375C36.25 23.4297 35.3906 24.25 34.375 24.25H30.625C29.5703 24.25 28.75 23.4297 28.75 22.375V21.75H21.25V22.375C21.25 22.4531 21.2109 22.5312 21.2109 22.5703L24.375 26.75H28.125C29.1406 26.75 30 27.6094 30 28.625V32.375C30 33.4297 29.1406 34.25 28.125 34.25H24.375C23.3203 34.25 22.5 33.4297 22.5 32.375V28.625C22.5 28.5859 22.5 28.5078 22.5 28.4297L19.375 24.25H15.625C14.5703 24.25 13.75 23.4297 13.75 22.375V18.625Z"
                ></path>
              </svg>
            </div>
            <div>
              <h4>Full-suite solutions</h4>
              <p>
                Experience the ease of integration across various banking and
                payment functions with our comprehensive suite of solutions.
              </p>
            </div>
          </div>
          {/* philosophy spec item */}
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 50 50"
                height="50"
                width="50"
              >
                <rect fill="#E9F3FF" rx="25" height="50" width="50"></rect>
                <path
                  fill="#0B305B"
                  d="M13.75 18.625C13.75 17.6094 14.5703 16.75 15.625 16.75H19.375C20.3906 16.75 21.25 17.6094 21.25 18.625V19.25H28.75V18.625C28.75 17.6094 29.5703 16.75 30.625 16.75H34.375C35.3906 16.75 36.25 17.6094 36.25 18.625V22.375C36.25 23.4297 35.3906 24.25 34.375 24.25H30.625C29.5703 24.25 28.75 23.4297 28.75 22.375V21.75H21.25V22.375C21.25 22.4531 21.2109 22.5312 21.2109 22.5703L24.375 26.75H28.125C29.1406 26.75 30 27.6094 30 28.625V32.375C30 33.4297 29.1406 34.25 28.125 34.25H24.375C23.3203 34.25 22.5 33.4297 22.5 32.375V28.625C22.5 28.5859 22.5 28.5078 22.5 28.4297L19.375 24.25H15.625C14.5703 24.25 13.75 23.4297 13.75 22.375V18.625Z"
                ></path>
              </svg>
            </div>
            <div>
              <h4>Full-suite solutions</h4>
              <p>
                Experience the ease of integration across various banking and
                payment functions with our comprehensive suite of solutions.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Philosophy;
