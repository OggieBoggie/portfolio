export const projects = [
    {
        thumbnail: "/project/immersio/thumbnail.jpg",
        description: "This project was sponsored by Immersio, a language learning platform that strives to understand user learning behaviors to enhance course effectiveness and tailor materials. Currently, there is no method for storing and handling data, which this project aims to solve by creating a backend capable of storing and managing all data from tracking activities. The backend is built with NodeJS and Express, connecting to MongoDB Atlas in the cloud. It uses Mongoose to create schemas for the data and to query specific data through many RESTful routes. With the schema carefully designed to handle specific scenarios involving incoming user data, there are numerous ways to update specific instances of data for further analysis. Using Swagger, all the routes in the backend are fully documented with test use cases. There is also a mock frontend built with React and TypeScript to demonstrate how data is passed in for specific scenarios, such as questions and viewing videos. For the video page, specific logic allows it to track every instance in which the video is paused, played, replayed, and skipped. A data simulator was built to stress test the backend, ensuring it can handle various amounts of traffic and simulate events where data is passed. AWS is also used to deploy the backend and frontend with EC2. These images are built with Docker for easy deployment and scaling. Jenkins and GitHub Actions were used for the CI/CD pipelines, with Jest for unit testing and Grafana for monitoring the backend.",
        title: "Immersio",
        tags: ["NodeJS", "Express", "MongoDB", "React", "TypeScript", "Docker", "AWS", "CI/CD", "Jest", "Swagger", "Jenkins", "Grafana", "Agile", "Industry Sponsored"],
        video: ["https://www.linkedin.com/feed/update/urn:li:activity:7183211066972147712/"],
        date: "2024-04-12",
        screenshots: [
            {
                link: "/project/immersio/routes.jpg",
                description: "Routes Documentation"
            },
            {
                link: "/project/immersio/schema.jpg",
                description: "Schema for Storing Activities"
            },
            {
                link: "/project/immersio/question.jpg",
                description: "Mock Frontend Questions Page"
            },
            {
                link: "/project/immersio/video.jpg",
                description: "Mock Frontend Video Page"
            }
        ]
    },
    {
        thumbnail: "/project/microservices/thumbnail.jpg",
        description: "A microservices project simulates a game rental service, which allows for receiving order and rental requests. There are multiple services that handle different aspects of the system. The first service is the receiver, which receives the POST requests for order and rental requests and processes the messages to Kafka. The second service is the storage service, which consumes the messages from Kafka and stores the data in a MySQL database. The third service is the processing service, which queries the data from the storage service and processes them into stats, such as averages and total amounts, towards a SQLite database. The fourth service is the audit log service, which logs all the requests with indexes and timestamps from consuming the messages from Kafka. The front end is built with React Vite, providing a visual interface for the data and audit logs. Another service is the event log, which checks the status of the services by consuming a topic on Kafka, storing it in a SQLite database. All the routes are fully documented with Swagger, and the services are built with Python Flask, using the Connexion library. All of this is deployed on AWS EC2, using Docker and Docker Compose to build the images from DockerHub. There is also Nginx for load balancing and ease of access to the services, and Apache JMeter was used for stress testing. Once changes are made to a specific service, Jenkins automatically builds a CI/CD pipeline, with the option of updating the VM to the latest version. The pipeline consists of a build stage that installs all the dependencies, a linting stage to check the code quality, security scan to check for vulnerabilities in the dependencies, package which builds and pushes the version to docker, and deploy to apply the changes to the VM. Centralized logging was also applied, as well as externalized configuration allowing for different settings for different environments. ",
        title: "Games Rental Microservices",
        tags: ["Python", "Flask", "React", "Docker", "AWS", "Nginx", "MySQL", "SQLite", "Swagger", "Kafka", "Jenkins", "CI/CD", "Logging", "Microservices"],
        date: "2024-04-04",
        screenshots: [{
            link: "/project/microservices/dashboard.png",
            description: "Dashboard page"
        },
        {
            link: "/project/microservices/pipelines.png",
            description: "Jenkins pipelines built for services"
        },
        {
            link: "/project/microservices/stages.png",
            description: "Example stages built with shared library"
        }
    ]

    },
    {
        thumbnail: "/project/placespeak/thumbnail.jpg",
        description: "This project was sponsored by PlaceSpeak, a company that created a platform aimed at enhancing local citizen engagement and is planning to expand further into the United States. The project builds upon the existing platform, placespeak.com, by creating modular components and extending the neighborhood mapping to the U.S. Our solution sought to increase user engagement by encouraging interactions through gamification elements such as a points system and unlockable badges. Additional features developed include profile customization and the distribution of polls to users within the same neighborhood. The front end was developed with React, Next.js, Tailwind CSS, and TypeScript. The back end utilized Django with PostgreSQL and PostGIS, employing shapefiles to delineate neighborhood boundaries. WebSockets were implemented for real-time updates on polls, enabling users to receive instant notifications. OAuth was incorporated to facilitate account creation and login using Google. This project was executed using Agile and Scrum methodologies over a period of four months by an eight-member team.",
        title: "PlaceSpeak",
        tags: ["React", "NextJS", "Tailwind", "TypeScript", "Django", "PostgreSQL", "PostGIS", "Websockets", "RDS", "Agile", "OAuth", "Industry Sponsored"],
        repo: "https://github.com/OggieBoggie/ISSP2023-PlaceSpeak",
        video: ["https://drive.google.com/file/d/1E-TSmMK2oemmGmnpyLLXXMeu3-bAaj4b/view?resourcekey", "https://drive.google.com/file/d/1PcqMm0PL8GvnsyznZ7AfooBbVDiFl4JQ/view?resourcekey"],
        date: "2023-12-12",
        screenshots: [{
            link: "/project/placespeak/profile.png",
            description: "Profile Page"
        },
        {
            link: "/project/placespeak/shapefiles.jpg",
            description: "Neighborhood mapping with shapefiles"
        },
        {
            link: "/project/placespeak/poll.jpg",
            description: "Poll Creation Page"
        },
        {
            link: "/project/placespeak/settings.jpg",
            description: "Account Settings Page"
        }
        ]
    },
    {
        thumbnail: "/project/album/thumbnail.jpg",
        description: "A full-stack application utilizing the MERN stack and AWS cloud services is offered, providing a photo album service. Users can generate images with OpenAI's DALL·E 3, upload, and view their own photos, as well as those from other users. A REST API was developed using Node.js and Express, with MongoDB for the database, and AWS S3 for image storage. The frontend was deployed on Netlify, while the backend was deployed on AWS EC2, featuring load balancing and auto-scaling capabilities.",
        title: "Dream Albums",
        tags: ["MongoDB", "Express", "React", "NodeJS", "S3", "EC2", "Tailwind", "Vite", "TypeScript"],
        repo: "https://github.com/OggieBoggie/ACIT-3475-Project",
        video: ["https://www.youtube.com/watch?v=DUK0K7sUx8Q"],
        date: "2023-12-05",
        screenshots: [
            {
                link: "/project/album/home.jpg",
                description: "Home Page"
            },
            {
                link: "/project/album/generate.jpg",
                description: "Generate Images Page"
            },
            {
                link: "/project/album/upload.jpg",
                description: "Upload Images Page"
            },
            {
                link: "/project/album/save.jpg",
                description: "Save Images Page"
            }
        ]
    },
    {
        thumbnail: "/project/gym/thumbnail.jpg",
        description: "A gym management web app that offers two different experiences for gym members and gym owners. Gym members have access to a randomly selected workout routine, and they can also select their workouts with specific filters to check whether specific equipment is available at certain gyms or not. Gym members can also track and document their progress using the tables and calendar view page. Users can view which gyms have which equipment and the contact details, so they can plan accordingly. Gym managers can add and manage their gyms, specifying what equipment is available and its condition. This app was created using Node.js and Express for the backend, with Passport authentication, and EJS for the frontend. Unit tests were also used with CircleCI for continuous integration. This project was created using Agile methodologies and Scrum for project management over a 4-week period and with a team of 5.",
        title: "GymConnects",
        tags: ["NodeJS", "JSON", "Express", "CircleCI", "Agile", "EJS"],
        repo: "https://github.com/OggieBoggie/Agile-Team5-Project",
        video: [],
        date: "2023-05-19",
        screenshots: [
            {
                link: "/project/gym/daily.jpg",
                description: "Daily Workout Page"
            },
            {
                link: "/project/gym/select.jpg",
                description: "Select Workout Page"
            },
            {
                link: "/project/gym/progress.jpg",
                description: "Personal Progress Page"
            },
            {
                link: "/project/gym/calendar.jpg",
                description: "Progress Calendar"
            },
            {
                link: "/project/gym/manage.jpg",
                description: "Gym Manager Page"
            },
            {
                link: "/project/gym/equipment.jpg",
                description: "Manage Equipment Page"
            }
        ]
    },
    {
        thumbnail: "/project/spring/thumbnail.jpg",
        description: "A project submitted for the 2023 Spring Jam created over a week, to create a spring themed game. This game was created using Godot and GDScript, where the goal is to water as many flowers as possible throughout 5 different levels. Play the game at: https://oggieboggie.itch.io/spring-has-come",
        title: "Spring Has Come",
        tags: ["Godot", "GDScript"],
        repo: "https://github.com/OggieBoggie/SpringJam2023",
        video: [],
        date: "2023-04-30",
        screenshots: [
            {
                link: "/project/spring/pause.jpg",
                description: "Pause Menu"
            },
            {
                link: "/project/spring/level2.jpg",
                description: "Level 2"
            },
            {
                link: "/project/spring/level3.jpg",
                description: "Level 3"
            },
            {
                link: "/project/spring/level4.jpg",
                description: "Level 4"
            },
        ]
    },
]
