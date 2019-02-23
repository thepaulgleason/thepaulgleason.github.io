      initApp = function() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var photoURL = user.photoURL;
            user.getIdToken().then(function(accessToken) {
              

              document.getElementById('user-name').textContent = 'hi ' + displayName
              document.getElementById('sign-out-button').hidden = false
              document.getElementById('#firebaseui-auth-container').hidden = true;
              document.getElementById("profilePic").src = photoURL
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
            document.getElementById('sign-out-button').hidden = true
            document.getElementById('#firebaseui-auth-container').hidden = false
          }
        }, function(error) {
          console.log(error);
        });
      };

      window.addEventListener('load', function() {
        initApp()
      });
  