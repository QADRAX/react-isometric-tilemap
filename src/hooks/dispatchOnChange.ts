import React, { useEffect } from 'react';

/**
 * Hook that dispatch an action when the dependency change.
 * Useful to bind props to context state.
 * @param dependency 
 * @param dispatch 
 * @param action 
 */
export function distpatchOnChange<T, D>(
    dependency: D | undefined,
    dispatch: React.Dispatch<T>,
    action: (payload: D) => T,
) {
    useEffect(() => {
        if (dependency) {
            dispatch(action(dependency));
        }
    }, [dependency]);
};