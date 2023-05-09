import { useContext } from 'react';
import RolesContext from '../contexts/rolesContext';

const useRoles = () => {
    return useContext(RolesContext);
};

export default useRoles;
