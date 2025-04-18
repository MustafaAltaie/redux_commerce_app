import React from 'react';

const HelpSupportPage = () => {
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      maxWidth: '900px',
      margin: '0 auto',
      padding: '2rem',
      backgroundColor: '#f9f9f9',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#333',
    },
    section: {
      marginBottom: '2rem',
    },
    subheading: {
      fontSize: '1.5rem',
      color: '#555',
      marginBottom: '0.5rem',
    },
    paragraph: {
      fontSize: '1rem',
      lineHeight: '1.6',
      color: '#444',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Help & Support</h1>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Getting Started</h2>
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          purus vestibulum, dictum sem sed, posuere nulla. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Integer dignissim, leo vitae fermentum aliquam, urna odio
          dictum enim, vel sollicitudin nunc elit eget nulla.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Account Management</h2>
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          eleifend turpis sit amet erat laoreet, nec varius ex laoreet. In
          aliquam ipsum id sollicitudin efficitur. Etiam ac orci cursus,
          condimentum eros eget, dignissim massa. Proin in blandit lorem. Nulla
          facilisi.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Troubleshooting</h2>
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          finibus, risus at efficitur dapibus, felis elit euismod justo, sed
          iaculis sapien nulla nec sem. Sed et ligula erat. Mauris at facilisis
          orci. Nunc porta tincidunt ipsum, at lacinia erat sollicitudin ac.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Contact Support</h2>
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. In et dolor vel diam euismod blandit. Integer
          bibendum lorem ac felis sollicitudin, at dignissim nisl commodo.
        </p>
      </div>
    </div>
  );
};

export default HelpSupportPage;