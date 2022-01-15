import { useEffect, useState } from 'react';

import { AppScreenContainer } from '../../components/AppScreenContainer/AppScreenContainer'
import { AppParams } from '../../components/AppParams/AppParams'
import { fetchArmy } from '../../api/armies'
import { armyToParams } from '../../utils/armyToParams'

export function Dashboard() {
    const [armyParams, setArmyParams] = useState();

    useEffect(() => {
        const army = fetchArmy()
        setArmyParams(armyToParams(army))
    }, [])

    return (
        <AppScreenContainer>
            <AppParams data={armyParams} />
        </AppScreenContainer>
    );
}