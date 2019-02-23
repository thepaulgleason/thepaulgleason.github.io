      initApp = function() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            user.getIdToken().then(function(accessToken) {
              
              document.getElementById('user-name').textContent = 'hi ' + displayName
              document.getElementById('sign-in').textContent = 'Sign out';
              document.getElementById('firebase-auth-container').hidden = true;

              document.getElementById('account-details').textContent = JSON.stringify({
                displayName: displayName,
                email: email,
                emailVerified: emailVerified,
                phoneNumber: phoneNumber,
                photoURL: photoURL,
                uid: uid,
                accessToken: accessToken,
                providerData: providerData
              }, null, '  ');
            });
          } else {
            // User is signed out.
            document.getElementById('user-name').hidden = true
            document.getElementById('firebase-auth-container').hidden = false
          }
        }, function(error) {
          console.log(error);
        });
      };

      window.addEventListener('load', function() {
        initApp()
      });
  