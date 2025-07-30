# Thesis Writer - AI-Powered Academic Assistance

![Thesis Writer Banner](https://placehold.co/1200x300.png?text=Thesis+Writer)

**Thesis Writer** is a modern, responsive web application built with Next.js and Tailwind CSS, designed to provide expert academic writing services. It features an AI-powered brainstorming tool to help students generate research topic ideas instantly.

---

## ✨ Key Features

-   **Comprehensive Academic Services**: Offers thesis writing, synopsis creation, research paper help, and more.
-   **AI Research Topic Brainstormer**: A free, Genkit-powered tool to generate unique research ideas on a dedicated page.
-   **Direct Contact Form**: Submissions are sent directly to your email using the Resend API.
-   **WhatsApp Integration**: Quick chat access through a floating button for instant communication.
-   **Fully Responsive Design**: A seamless experience across desktops, tablets, and mobile devices.
-   **Modern UI/UX**: Built with ShadCN UI and custom components for a clean and professional interface.

---

## 🚀 Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (with App Router)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
-   **Generative AI**: [Firebase Genkit](https://firebase.google.com/docs/genkit)
-   **Email Delivery**: [Resend](https://resend.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Deployment**: Firebase App Hosting

---

## ⚙️ Getting Started

Follow these instructions to set up and run the project locally on your machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/en) (v18 or later recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of your project and add the necessary API keys.

    ```env
    # Get your API key from https://resend.com
    RESEND_API_KEY=your_resend_api_key

    # Your Google AI API key for Genkit
    # Get it from https://aistudio.google.com/app/apikey
    GEMINI_API_KEY=your_gemini_api_key
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:9002`.

---

We hope you find this project useful and easy to get started with!

