import { AppTabs } from '../../components/AppTabs/AppTabs';

import { Armies } from './Armies/Armies';
import { Clans } from './Clans/Clans';

const CityTabs = [
    { key: 'CityArmies', name: 'צבאות', component: Armies },
    { key: 'CityClans', name: 'שבטים', component: Clans }
]

export function City() {
    return (
        <AppTabs tabs={CityTabs} />
    );
}