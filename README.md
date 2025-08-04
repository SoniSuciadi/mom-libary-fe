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

### 11. Deployment

- The application is already deployed and can be accessed at [https://momlibrary-fe.zenika.id/](https://momlibrary-fe.zenika.id/).
- You can also view a demo of the application at [this Google Drive link](https://drive.google.com/file/d/1gJ4c3Lxx42Xg4Ywemwl4pvyJDSPHNacL/view?usp=sharing).

For deployment, you can deploy your Next.js app to platforms like **Vercel**, **Netlify**, or **AWS**.

## License

This project is licensed under the MIT License.

---

Feel free to reach out if you encounter any issues or need assistance!
