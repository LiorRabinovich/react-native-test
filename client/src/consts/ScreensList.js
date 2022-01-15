import { Dashboard } from '../screens/Dashboard/Dashboard.js'
import { Clans } from '../screens/Clans/Clans.js'
import { Training } from '../screens/Training/Training.js'
import { Store } from '../screens/Store/Store.js'
import { City } from '../screens/City/City.js'

export const ScreensList = [
    { key: 'Training', name: 'אימון', component: Training },
    { key: 'City', name: 'עיר', component: City },
    { key: 'Dashboard', name: 'שם הצבא', component: Dashboard },
    { key: 'Store', name: 'חנות', component: Store },
    { key: 'Clan', name: 'שבט', component: Clans },
]