

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async( dispatch ) => {

        // dispatch(checkingCredentials());

        // const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});

        // if(!ok) return dispatch(logout({errorMessage}));

        // dispatch(login({uid, displayName, email, photoURL}));
    }
}

export const startLoginWithEmailPassword = ({email, password}) => {
    return async( dispatch ) => {
        // dispatch(checkingCredentials());

        // const {ok, uid, photoURL, displayName, errorMessage} = await loginWithEmailPassword({email, password});

        // if(!ok) return dispatch(logout({errorMessage}));

        // dispatch(login({uid, displayName, email, photoURL}));
    }
}