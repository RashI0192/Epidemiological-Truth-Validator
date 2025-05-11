# Epidemiological-Truth-Validator
<img width="416" alt="Screenshot 2025-05-11 at 9 45 53 PM" src="https://github.com/user-attachments/assets/bbb5f09b-dff2-4912-ae2d-eae646958601" />
## Problem Statement
Health misinformation spreads rapidly on social media platforms, particularly during public health crises like COVID-19 and Monkeypox outbreaks. Inaccurate or misleading health advice can lead to widespread panic, poor medical decisions, and mistrust in scientific institutions. While many fact-checkers exist, there is a pressing need for real-time, intelligent systems that not only identify false information but also explain the reasoning behind these classifications and offer reliable health guidance.

## Project Overview
<p> This is a a Java-based chatbot powered by a fine-tuned Google Flan-T5 model to tackle the challenge of health misinformation head-on. Trained on over 30,000 social media posts (spanning tweets, Reddit threads, and Facebook comments), this system detects false claims, explains why the claim is incorrect, and offers additional, science-backed context on the topic.

- The training pipeline involved:

- Random search hyperparameter tuning and early stopping to optimize performance.
- A modular, multi-stage architecture: First, a classifier model identifies potential misinformation using stratified K-fold training, then passes this enriched context (classification + related topics) to the Flan-T5 model.
- The Flan-T5 model is then fine-tuned to generate reasoned, trustworthy responses with confidence scores.
- This system achieved 95% accuracy, making it a powerful tool for real-time misinformation detection and educational outreach.
</p>

## Training_Flan.iynb 
- This contains the code for training the google flan (hugging face) and Exploratory data analysis
<img width="767" alt="Screenshot 2025-05-11 at 9 39 42 PM" src="https://github.com/user-attachments/assets/8bcb4d40-6f40-4682-ac00-ebb58056b8fa" />
<img width="760" alt="Screenshot 2025-05-11 at 9 39 23 PM" src="https://github.com/user-attachments/assets/d005517c-7044-41c1-891e-a1d6504a44ff" />
## Tech Stack 
- Languages: Python, Java, JavaScript
- Frontend: React.js, Tailwind CSS
- Model & Training: Hugging Face Transformers, Google Flan-T5 base
- Backend Integration: Java-based chatbot logic with REST API endpoints

- Here is the sample reply " 
<p>Query : You can't get COVID-19 if you're asymptomatic</p> 
<p>Reply:</p>
<p> Hello! I'm here to help you with news analysis related to monkeypox and COVID-19. If your query isn't related to either of these topics, I won't be able to assist.
Binary Class: Misinformation
Binary Explanation: Asymptomatic individuals can carry and transmit COVID-19, even if they don't experience symptoms. This is a significant factor in the spread of the virus.
Ternary Class: Misleading
Ternary Explanation: The statement is dangerously misleading as it downplays the role of asymptomatic transmission in the pandemic. This misinformation can lead to risky behaviors and increased spread.
Additional Notes: The information seems incorrect with an accuracy of 97%. COVID-19 transmission from asymptomatic individuals has been well-documented.
Additional Information: Asymptomatic transmission of COVID-19 is a key reason why widespread testing and preventive measures like masking and social distancing were important during the pandemic. The ability of infected individuals to spread the virus without showing symptoms makes it difficult to control the spread solely through symptomatic case isolation. Studies have shown varying rates of asymptomatic transmission, but it's consistently recognized as a substantial factor in the virus's spread. This highlights the importance of public health measures targeting the entire population, not just those displaying symptoms." </p>
