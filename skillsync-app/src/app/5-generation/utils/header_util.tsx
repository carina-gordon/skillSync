const sendProfileData = () => {
  console.log('In sendProfileData');
    const content = {
      FirstName: 'John', // Replace with dynamic value
      LastName: 'Doe', // Replace with dynamic value
      PhoneNumber: '123-456-7890', // Replace with dynamic value
      UserEmail: 'john.doe@example.com', // Replace with dynamic value
      UserGithub: 'johnDoeGithub', // Replace with dynamic value
      UserLinkedin: 'johnDoeLinkedin', // Replace with dynamic value
      UserWebsite: 'johndoe.com', // Replace with dynamic value
    };
  
    const bodyContent = JSON.stringify({
      content: `
        \\begin{center}
          \\textbf{\\Huge \\scshape ${content.FirstName} ${content.LastName} \\\\ \\vspace{1pt}}
          \\small ${content.PhoneNumber} | \\href{mailto:${content.UserEmail}}{\\underline{${content.UserEmail}}} | \\href{https://github.com/${content.UserGithub}}{\\underline{${content.UserGithub}}} |
          \\href{https://linkedin.com/in/${content.UserLinkedin}}{\\underline{${content.UserLinkedin}}} |
          \\href{https://${content.UserWebsite}}{\\underline{${content.UserWebsite}}}
        \\end{center}
      `,
    });
    
    // for local testing: http://localhost:3000/api/headers
    // for production: https://skillsync-app.vercel.app/api/headers
    fetch('http://localhost:3000/api/headers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: bodyContent,
    })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

export default sendProfileData;
  