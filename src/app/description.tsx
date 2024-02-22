import React from 'react';
import Typography from '@mui/material/Typography';

// Component for Meta Title
const MetaTitle = () => (
  <Typography variant="h6" component="h1" gutterBottom>
    MovieKex - Stream HD Movies Online for Free | Best Quality Movies and TV Series | No Subscription or Account Needed
  </Typography>
);

// Component for Content
const ContentSection = () => (
  <Typography variant="body1" paragraph>
    Discover a world of entertainment at MovieKex, your ultimate destination for streaming HD movies and TV series for free. Dive into a vast collection of films from around the globe, including the United Kingdom, Italy, Canada, Spain, Germany, France, Australia, and Japan. MovieKex serves as a comprehensive index of legal movie links available on the internet, offering high-speed streaming for an unparalleled viewing experience.
  </Typography>
  // ... (Other sections as per the original content)
);

// Component for Benefits Section
const BenefitsSection = () => (
  <div>
    <Typography variant="h6" gutterBottom>
      Why Choose MovieKex?
    </Typography>
    {/* List of benefits with Typography components */}
    <ul>
      <li>
        <Typography variant="body1">
          <strong>No Subscription, No Account:</strong> Unlike other platforms, MovieKex eliminates the need for subscriptions or account creations. Simply choose your desired movie and start watching instantly.
        </Typography>
      </li>
      {/* ... (Other benefits) */}
    </ul>
  </div>
);

// Component for February 2024 Update Section
const UpdateSection = () => (
  <Typography variant="body1" paragraph>
    As of February 2024, MovieKex remains committed to providing a seamless streaming experience. While energy prices in Europe have affected server costs, MovieKex continues to operate on a net-zero profit basis. The website's code is continually improved to enhance user experience. Stay tuned for updates, and enjoy the world of movies at MovieKex.
  </Typography>
);

// Main Component
const Description = () => (
  <div>
    {/* Meta Title Section */}
    <MetaTitle />

    {/* Content Section */}
    <ContentSection />

    {/* Benefits Section */}
    <BenefitsSection />

    {/* February 2024 Update Section */}
    <UpdateSection />
  </div>
);

export default Description;
