
async function generateRoles(currentRole, desiredRole) {

  // Send api call to https://skillsync-serverside.vercel.app/api/generate
  console.log('currentRole: ', currentRole);
  console.log('desiredRole: ', desiredRole);

  try {
    const response = await fetch('https://skillsync-serverside.vercel.app/api/generate_stream', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        currentRole: currentRole,
        desiredRole: desiredRole
      })
    });

  
    var data = await response.json();
    
  } catch (error) {
    console.log(error);
    return error;
  }

  return data;
  
}

export default generateRoles;
