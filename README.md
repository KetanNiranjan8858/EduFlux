EduFlux is a smart learning platform designed to revolutionize student self-study and directly address the pervasive 5-10 year skills gap between traditional university curricula and modern industry demands (particularly in areas like AI/ML, Blockchain, and FinTech). The project is built on the philosophy of embedding Generative AI intelligence at every stage of the learning and career preparation process, moving beyond simple flashcards to provide predictive, personalized mentorship.

Core Problem and Unique AI Solution
The platform tackles two critical issues:

Inefficient Self-Study: Students' notes are disorganized, and their review methods are ineffective, leading to poor retention and false confidence.

The Skills Gap: Graduates lack practical, modern experience, leaving them unprepared for the best jobs.

EduFlux closes this gap by transforming passive learning into an active, outcome-driven process using highly specialized AI models via the Google Gemini API.

Key AI-Powered Feature Pillars 🧠✂️💼
The project’s functionality is defined by four core, technically advanced features, where the AI's behavior is rigidly controlled by detailed System Instructions and constrained to output a strict JSON object.

1. AI Question Generator (The Study Planner)
This feature turns any uploaded document (PDF, notes, textbook) into adaptive learning sessions. The AI acts as an "EduFlux Spaced Repetition Quiz Engine" to enforce a crucial learning principle:

Adaptive Practice: It dynamically creates micro-quizzes containing exactly five questions. A set ratio (e.g., three new concepts and two revision topics) is maintained, ensuring students are tested on material they previously struggled with to push knowledge into long-term memory.

Structured Output: The output is a JSON quiz that includes the question, options, correct answer, and a full pedagogical explanation.

2. Resume Analyzer (The Career Builder)
This tool bridges the skills gap by simulating the corporate hiring process.

ATS Simulation: The AI acts as an "EduFlux ATS Simulator," comparing the student's resume against a pasted Job Description (JD).

Quantified Alignment: It calculates a Percentage Match Score, prioritizing hard technical skills (e.g., 70% weightage).

Actionable Feedback: The analysis is delivered in a structured report that clearly lists Missing Hard Skills and provides concise recommended actions (e.g., "Add a project using [Skill]") to optimize the resume's language and content.

3. AI-Powered PDF Scheduler (Revision Planner)
This feature ensures long-term courses are reviewed correctly based on syllabus importance.

Weighted Revision: The AI is instructed to follow a strict 70% New Content / 30% Old Content weightage rule, automatically ensuring that a majority of the revision focus is on the latest material while forcing recall of older, foundational material.

Deep Recall: It generates exactly 10 open-ended, short-answer questions per session to promote deeper synthesis of information, providing a model answer key for self-assessment.

4. Automated Video Cutting Chatbot
This is a unique, time-saving feature for rapid revision.

Intelligent Extraction: The AI acts as an "EduFlux Video Segment Analyzer," processing the lecture transcript. It identifies the 10 most critical, self-contained segments (definitions, examples) and extracts their precise start and end timestamps.

Instant Assets: The backend then uses the FFmpeg tool to physically cut the original video file into shareable, high-impact revision 'Reels' (constrained to 30-60 seconds), ready for the student to download.

Technical Architecture and Platform
The EduFlux platform utilizes a standard high-performance architecture:

Backend: Developed using Flask (Python) for robust web service hosting.

Database: Uses MongoDB (or a similar solution) to store user data, content mappings, and performance analytics.

Intelligence Layer: The Google Gemini API is the engine powering all core features. The success of the application relies on the system's ability to generate detailed Prompt Templates that constrain Gemini's output to the strict JSON schemas required by the application's parsing logic.

The entire system is presented via a modern, intuitive Student Dashboard, which includes the DashboardQuickActionsCarousel for instant access to the core AI tools, Performance Analytics, and a Gamification & Rewards system to boost student engagement.
