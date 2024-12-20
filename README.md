
# **Fullstack Developer Technical Assessment**

This project is part of a technical assessment for a Fullstack Developer internship. The goal of the project was to implement a full-stack application using React, TailwindCSS, Supabase for the database, Prisma for ORM, and state management using either Redux or Zustand.

---

## **Project Overview**

The project demonstrates a fully functional full-stack web application. The goal was to re-create the primary screen from the provided Figma design, incorporating key features like:

- **UI Components**: Implementing responsive layout, color scheme, typography, and reusability.
- **State Management**: Using Redux/Zustand for managing global state and ensuring smooth data flow.
- **CRUD Operations**: Performing create, read, update, and delete operations using Supabase and Prisma.

---

## **Technologies Used**

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Prisma ORM, Supabase
- **State Management**: Redux
- **Deployment**: Vercel 

---

## **Features & Functionalities**

### **1. UI and Design**

- **Figma Reference**: The application was built based on the Figma design provided, ensuring consistency in layout, colors, and typography.
- **Responsive UI**: The application is fully responsive and adapts seamlessly to different screen sizes, thanks to TailwindCSS utility classes.
- **UI Components**: 
  - **Header & Navigation**: A responsive header with basic navigation was implemented.
  - **Cards/Sections**: Reusable card components and sections were created to display items dynamically.

### **2. State Management**

- **Global State**: Redux (or Zustand) is used for managing global state across the application.
  - **Redux**: Created a store with slices/actions for handling state updates.
  - **Zustand**: A global store with actions for retrieving and updating data (if Zustand was used).
- **Data Flow**:
  - **Fetching Data**: Data from Supabase is fetched upon component mount and user interaction.
  - **Updating Data**: Changes made to items (e.g., create, edit, delete) are reflected in both the global state and the database.

### **3. Database and ORM**

- **Supabase**: A Supabase project was created, and tables/models were configured for users and items based on the Figma design.
- **Prisma ORM**: Prisma was used for handling database operations (create, read, update, delete).
  - **CRUD Operations**: All CRUD operations were implemented using Prisma to interact with the Supabase database.
- **Environment Configuration**: Supabase API keys and environment variables were securely stored in a `.env` file.

### **4. Backend API**

- **API Routes**: A simple Node/Next.js API was created to handle CRUD operations.
  - **Create**: Added new items to the database.
  - **Read**: Fetched items and displayed them on the frontend.
  - **Update**: Updated existing items in the database.
  - **Delete**: Removed items from the database.

### **5. Deployment**

- **GitHub Repository**: The project is available on GitHub.
  - Repository link: https://github.com/SuyashShukla0007/CourseDashboard
- **Live Demo**: The project has been deployed to Vercel (or Netlify).
  - Live Demo URL: https://course-dashboard-five.vercel.app/

---

## **How to Run the Project Locally**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SuyashShukla0007/CourseDashboard
   ```

2. **Navigate into the project directory**:
   ```bash
   cd client
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Create a `.env` file** and add your Supabase API keys in:
   ```
   DATABASE_URL=your-supabase-db-url
   SUPABASE_URL=your-supabase-url
   SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

5. **Run the project locally**:
   ```bash
   npm run dev
   ```

6. **Open the application in your browser**:
   Navigate to `http://localhost:5173` to view the application.

---

## **Assessment Criteria**

### **Functionality**:
- The UI closely mirrors the Figma design with all the expected layout and styling.
- CRUD operations are fully functional: users can create, update, read, and delete items.

### **Code Quality**:
- The code is structured in a logical and maintainable manner.
- Redux/Zustand implementations (or custom hooks) are clear, well-documented, and follow best practices.

### **Design & Responsiveness**:
- The application adapts cleanly to different screen sizes.
- TailwindCSS was implemented consistently to create a polished and user-friendly interface.

### **Deployment**:
- The project is publicly accessible and connected to Supabase for data management.
- Environment variables are properly set in the hosting platform (Vercel).

---

## **Conclusion**

This project demonstrates a solid understanding of full-stack development concepts, including front-end UI implementation, state management, backend API development, and database interactions. The project adheres to the provided Figma design and includes fully functional CRUD operations using Supabase and Prisma.
