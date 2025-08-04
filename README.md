# Mom Library Frontend

This is the frontend application for **Mom Library**, a platform for managing meeting minutes. The app is built using **Next.js** with **React** and **Material UI**.

## Project Setup

Follow the steps below to set up the project locally.

### Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (v16.0.0 or later)
- **npm** (v7.0.0 or later) or **yarn** or **pnpm**

### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/mom-libary-fe.git
cd mom-libary-fe
```

### 2. Install Dependencies

Next, install the project dependencies:

If you're using **npm**:

```bash
npm install
```

If you're using **yarn**:

```bash
yarn install
```

If you're using **pnpm**:

```bash
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory of the project based on the provided `.env.template`:

```bash
cp .env.template .env
```

Then, set the following environment variables in `.env`:

```env
NEXT_PUBLIC_API_URL=your_api_url_here
```

Replace `your_api_url_here` with the actual API base URL used by the application.

### 4. Run the Development Server

Once the dependencies are installed and environment variables are set, you can start the development server.

Run the following command:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 5. Build the Project

To create a production build of the application, run:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### 6. Start the Production Server

Once the project is built, you can start the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

### 7. Linting the Code

To lint the project and check for any issues, run:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
```

### 8. Available Scripts

- `dev`: Starts the Next.js development server with turbopack.
- `build`: Builds the application for production.
- `start`: Starts the Next.js server in production mode.
- `lint`: Runs ESLint to check the code for issues.

### 9. Dependencies

This project uses the following dependencies:

- **@mui/material** and **@mui/icons-material**: For Material UI components and icons.
- **react-query**: For data fetching and caching.
- **react-hook-form**: For managing form state.
- **axios**: For making HTTP requests.
- **next-mdx-remote**: For rendering MDX content.
- **dayjs**: For date manipulation.
- **yup** and **@hookform/resolvers**: For schema validation with React Hook Form.
- **@mdxeditor/editor**: For editing and rendering MDX content.
- **nuqs**: For managing query state.

### 10. Development Notes

- This project uses **Next.js** with **Turbopack** for faster development builds.
- Make sure your API endpoint (`NEXT_PUBLIC_API_URL`) is set correctly in the `.env.local` file before running the project.


### 11. Design Notes: Libraries and Technologies Used

### **@mui/material and @mui/icons-material**: For Material UI components and icons
**Why Chosen**:
- **Material UI (MUI)** was chosen because it provides **pre-built UI components** that are consistent with **Material Design** principles from Google. Using MUI helps in rapidly building user interfaces without sacrificing design quality.
- **@mui/icons-material** was selected to provide modern, consistent, and easy-to-integrate icons across the application.

### **react-query**: For data fetching and caching
**Why Chosen**:
- **React Query** was selected for its **powerful data-fetching capabilities**. It handles **automatic caching** and **synchronization of data** across the application, reducing the need to manually manage fetching logic.
- The library also offers features like **pagination** and **background refetching**, ensuring data is always fresh without overloading the backend.

### **react-hook-form**: For managing form state
**Why Chosen**:
- **React Hook Form** is chosen due to its **excellent performance** and minimal re-renders. It simplifies the handling of form states, validations, and submissions.
- It integrates well with libraries like **Yup** for schema validation, and its **minimalistic API** makes form handling seamless and efficient.

### **axios**: For making HTTP requests
**Why Chosen**:
- **Axios** is a popular **HTTP client** that is easy to use and supports **promise-based** requests. It handles tasks like **request/response interception**, **automatic JSON parsing**, and **error handling** without much boilerplate.
- Axios also allows easy configuration for **global error handling** and **auth tokens**, making it ideal for interacting with REST APIs.

### **next-mdx-remote**: For rendering MDX content
**Why Chosen**:
- **Next MDX Remote** was selected to render **MDX content** in the Next.js application. MDX combines **Markdown** with **JSX**, allowing us to write rich content and embed React components within it.
- This approach offers the flexibility to mix **static markdown** with dynamic React components, improving content interactivity while keeping SEO benefits.

### **dayjs**: For date manipulation
**Why Chosen**:
- **Day.js** was chosen as a **lightweight alternative** to **moment.js**. It provides a simple, fast API for manipulating and formatting dates.
- It is ideal for applications that require basic date manipulation without the overhead of larger libraries like **moment.js**, ensuring both performance and functionality.

### **yup and @hookform/resolvers**: For schema validation with React Hook Form
**Why Chosen**:
- **Yup** is used for **schema validation** as it provides a simple API for defining validation rules and allows seamless integration with **React Hook Form** via **@hookform/resolvers**.
- It helps in ensuring that form data is validated before submission, providing a better user experience and reducing errors from incorrect data.

### **@mdxeditor/editor**: For editing and rendering MDX content
**Why Chosen**:
- **MDXEditor** was selected for enabling users to **edit and render MDX content** directly within the app. This is particularly useful for creating dynamic, content-rich pages with interactive elements.
- The editor provides an intuitive way to write and edit content in **MDX format**, allowing for seamless integration of both static and interactive elements in the application.

### **nuqs**: For managing query state
**Why Chosen**:
- **Nuqs** is used for managing **query state** in the URL, making it easier to handle and synchronize query parameters (such as search filters) across the app.
- It helps in creating a **clean and maintainable state management** solution, allowing users to bookmark or share links with pre-defined search filters, enhancing the usability and user experience of the app.

---

These libraries and technologies were carefully selected to ensure that the application is **fast**, **scalable**, and **easy to maintain**. Each choice contributes to achieving a **seamless user experience**, **efficiency in development**, and **robustness in production**.


### 12. Deployment

- The application is already deployed and can be accessed at [https://momlibrary-fe.zenika.id/](https://momlibrary-fe.zenika.id/).
- You can also view a demo of the application at [this Google Drive link](https://drive.google.com/file/d/1gJ4c3Lxx42Xg4Ywemwl4pvyJDSPHNacL/view?usp=sharing).

For deployment, you can deploy your Next.js app to platforms like **Vercel**, **Netlify**, or **AWS**.

## License

This project is licensed under the MIT License.

---

Feel free to reach out if you encounter any issues or need assistance!
