const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Course = require('./models/Course');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// const courses =[
//     { title: 'Python for Data Science', description: 'Explore data analysis with Python', category: 'Data Science', level: 'Intermediate', image: '/assets/python-logo.png' },
//     { title: 'Introduction to HTML', description: 'Learn to create basic web pages', category: 'Web Development', level: 'Beginner', image: '/assets/html-logo.png' },
//     { title: 'CSS Styling', description: 'Master the art of web design with CSS', category: 'Web Development', level: 'Intermediate', image: '/assets/css-logo.png' },
//     { title: 'React Basics', description: 'Build dynamic web apps with React', category: 'Programming', level: 'Intermediate', image: '/assets/react-logo.png' },
//     { title: 'Node.js Essentials', description: 'Learn backend development with Node.js', category: 'Programming', level: 'Intermediate', image: '/assets/nodejs-logo.png' },
//     { title: 'Data Structures', description: 'Master essential data structures', category: 'Programming', level: 'Advanced', image: '/assets/data-structures.png' },
//     { title: 'Machine Learning with Python', description: 'Dive into machine learning techniques', category: 'Data Science', level: 'Advanced', image: '/assets/ml-python.png' },
//     { title: 'Cloud Computing Basics', description: 'Understand the basics of cloud computing', category: 'IT', level: 'Beginner', image: '/assets/cloud-computing.png' },
//     { title: 'Linux Fundamentals', description: 'Get started with Linux systems', category: 'IT', level: 'Beginner', image: '/assets/linux-logo.png' },
//     { title: 'Java Programming', description: 'Learn Java from scratch', category: 'Programming', level: 'Beginner', image: '/assets/java-logo.png' },
//     { title: 'C++ for Beginners', description: 'Introduction to C++ programming', category: 'Programming', level: 'Beginner', image: '/assets/cpp-logo.png' },
//     { title: 'Cybersecurity Basics', description: 'Learn to protect systems and data', category: 'IT', level: 'Beginner', image: '/assets/cybersecurity.png' },
//     { title: 'Android App Development', description: 'Build your first Android app', category: 'Mobile Development', level: 'Intermediate', image: '/assets/android-logo.png' },
//     { title: 'iOS App Development', description: 'Start developing iOS apps', category: 'Mobile Development', level: 'Intermediate', image: '/assets/ios-logo.png' },
//     { title: 'SQL for Data Analysis', description: 'Analyze data with SQL', category: 'Data Science', level: 'Beginner', image: '/assets/sql-logo.png' },
//     { title: 'Artificial Intelligence', description: 'Explore AI techniques and applications', category: 'Data Science', level: 'Advanced', image: '/assets/ai-logo.png' },
//     { title: 'Blockchain Fundamentals', description: 'Learn blockchain technology basics', category: 'IT', level: 'Beginner', image: '/assets/blockchain-logo.png' },
//     { title: 'Game Development with Unity', description: 'Create games using Unity', category: 'Game Development', level: 'Intermediate', image: '/assets/unity-logo.png' },
//     { title: 'Photoshop Essentials', description: 'Master Photoshop tools', category: 'Design', level: 'Beginner', image: '/assets/photoshop-logo.png' },
//     { title: 'Digital Marketing', description: 'Learn online marketing strategies', category: 'Marketing', level: 'Beginner', image: '/assets/digital-marketing.png' },
//     { title: 'SEO Techniques', description: 'Optimize websites for search engines', category: 'Marketing', level: 'Intermediate', image: '/assets/seo-logo.png' },
//     { title: 'Docker for DevOps', description: 'Learn containerization with Docker', category: 'IT', level: 'Intermediate', image: '/assets/docker-logo.png' },
//     { title: 'Kubernetes Basics', description: 'Manage containers with Kubernetes', category: 'IT', level: 'Advanced', image: '/assets/kubernetes-logo.png' },
//     { title: 'Rust Programming', description: 'Explore the Rust programming language', category: 'Programming', level: 'Intermediate', image: '/assets/rust-logo.png' },
//     { title: 'Flutter for Mobile Apps', description: 'Build apps with Flutter', category: 'Mobile Development', level: 'Intermediate', image: '/assets/flutter-logo.png' },
//     { title: 'Photography Basics', description: 'Learn photography essentials', category: 'Design', level: 'Beginner', image: '/assets/photography.png' },
//     { title: 'Video Editing', description: 'Edit videos professionally', category: 'Design', level: 'Intermediate', image: '/assets/video-editing.png' },
//     { title: 'Project Management', description: 'Master project management techniques', category: 'Business', level: 'Intermediate', image: '/assets/project-management.png' },
//     { title: 'Public Speaking', description: 'Develop effective public speaking skills', category: 'Communication', level: 'Beginner', image: '/assets/public-speaking.png' },
//     { title: 'Microsoft Excel', description: 'Learn advanced Excel techniques', category: 'Business', level: 'Intermediate', image: '/assets/excel-logo.png' },
//     { title: 'Figma for UI/UX', description: 'Design interfaces using Figma', category: 'Design', level: 'Intermediate', image: '/assets/figma-logo.png' },
// ]

// Course.insertMany(courses)
//     .then(() => {
//         console.log('Courses added successfully');
//         mongoose.connection.close();
//     })
//     .catch(err => {
//         console.error('Error adding courses:', err.message);
//         mongoose.connection.close();
//     });

const testCourse = new Course({
    title: 'Test Course',
    description: 'This is a test',
    category: 'Testing',
    level: 'Beginner',
});

testCourse.save()
    .then(() => {
        console.log('Test course added successfully');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error:', err.message);
        mongoose.connection.close();
    });
