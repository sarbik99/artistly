# Artistly Demo

## Overview
Artistly is a demo Next.js application for a Performing Artist Booking Platform. It allows event planners to browse artist profiles, filter by category, location, and fee range, and provides an onboarding form for artists to submit their details. A manager dashboard displays submissions in a table for review.

## Features
- **Homepage**: Hero section, category cards, navigation.
- **Artist Listing**: Grid layout, filters by category, location, and max fee.
- **Onboarding Form**: Multi-section form (name, bio, categories, languages, fee, location, optional image), validation via React Hook Form + Yup, success toast.
- **Manager Dashboard**: Table of submissions, status toggle action.

## Tech Stack
- Next.js (App Router, v13+)
- React Functional Components & Hooks (useState, useEffect, useContext)
- Tailwind CSS for styling
- React Hook Form + Yup for form handling and validation
- Framer Motion for subtle animations
- react-hot-toast for success messages
- Mock data via static JSON files

## Folder Structure
```
/app
  /artists        # Artist listing page
  /onboard        # Artist onboarding page
  /dashboard      # Manager dashboard page
/components      # Reusable components (Header, ArtistCard, FilterPanel, Table, etc.)
/data            # Static JSON data (artists.json)
/public          # Public assets (images, logo)
README.md        # Project documentation
```

## Setup & Running Locally
1. **Clone the repo** (public):
   ```bash
   git clone https://github.com/sarbik99/artistly.git
   cd artistly
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## Deployment
- Deployed on Vercel. After pushing to GitHub, deployments occur automatically.
- **Live URL**: https://artistly-gamma-two.vercel.app/

## Usage
- **Homepage**: Explore categories and navigate.
- **Artists Page**: Browse and filter artists by category, location, and max fee.
- **Onboard Page**: Fill the form to submit artist details (logged in console or mocked API).
- **Dashboard Page**: View submissions, toggle status between Pending/Contacted.

## Testing & Validation
- Form validation ensures required fields before submission.
- Filters update in real-time.
- Responsive design tested on various screen sizes.

## Contributing
- Clone the repo and create feature branches.
- Code style: Tailwind for styling, React hooks, functional components.
- Submit pull requests; ensure local `npm run build` passes without errors.

## Notes for Reviewer
- **Live Preview**: https://artistly-gamma-two.vercel.app/
- **Repository**: https://github.com/sarbik99/artistly
- No Vercel collaborator access needed; code is public and deployment is public.
- For any questions, refer to README or code comments in components.

## License
This is a demo assignment repository. Use as reference for learning purposes.
