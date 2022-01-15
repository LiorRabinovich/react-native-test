import { Icons } from '../consts/Icons'

export function armyToParams(army) {
    return [
        { key: 'title', title: 'שם', value: army.name, icon: { type: Icons.FontAwesome, name: 'user' } },
        { key: 'rating', title: 'דירוג כללי', value: army.rating, icon: { type: Icons.FontAwesome, name: 'star' } },
        { key: 'city', title: 'עיר', value: army.city, icon: { type: Icons.FontAwesome, name: 'building' } },
        { key: 'cityRating', title: 'דירוג בעיר', value: army.cityRating, icon: { type: Icons.FontAwesome, name: 'star' } },

        { key: 'powerGeneral', title: 'כח כללי', value: army.powerGeneral },
        { key: 'powerAttack', title: 'כח התקפה', value: army.powerAttack },
        { key: 'powerDefence', title: 'כח הגנה', value: army.powerDefence },
        { key: 'powerSpy', title: 'כח ריגול', value: army.powerSpy },

        { key: 'turns', title: 'תורות', value: army.turns },
        { key: 'diamonds', title: 'יהלומים', value: army.diamonds },
        { key: 'gold', title: 'זהב', value: army.gold },
        { key: 'wood', title: 'עץ', value: army.wood },
        { key: 'iron', title: 'ברזל', value: army.iron },

        { key: 'goldBank', title: 'זהב בבנק', value: army.goldBank },
        { key: 'woodBank', title: 'עץ בבנק', value: army.woodBank },
        { key: 'ironBank', title: 'ברזל בבנק', value: army.ironBank },

        { key: 'goldBankSpace', title: 'אחסון ', value: army.goldBankSpace },
        { key: 'woodBankSpace', title: 'שדרוג עובדי עץ', value: army.woodBankSpace },
        { key: 'ironBankSpace', title: 'שדרוג עובדי ברזל', value: army.ironBankSpace },

        { key: 'recruits', title: 'מגוייסים', value: army.recruits },
        { key: 'soldiers', title: 'חיילים', value: army.soldiers },
        { key: 'spies', title: 'מרגלים', value: army.spies },

        { key: 'slaves', title: 'עבדים', value: army.slaves },
        { key: 'slavesUnemployed', title: 'עבדים ללא תעסוקה', value: army.slavesUnemployed },
        { key: 'slavesGold', title: 'עובדי זהב', value: army.slavesGold },
        { key: 'slavesWood', title: 'עובדי עץ', value: army.slavesWood },
        { key: 'slavesIron', title: 'עובדי ברזל', value: army.slavesIron },

        { key: 'levelAttack', title: 'רמת התקפה', value: army.levelAttack },
        { key: 'levelDefence', title: 'רמת הגנה', value: army.levelDefence },
        { key: 'levelSpy', title: 'רמת מודיעין', value: army.levelSpy },

        { key: 'updateSlavesGold', title: 'כח עובדי זהב', value: army.updateSlavesGold },
        { key: 'updateSlavesWood', title: 'כח עובדי עץ', value: army.updateSlavesWood },
        { key: 'updateSlavesIron', title: 'כח עובדי ברזל', value: army.updateSlavesIron },

        { key: 'updateTurns', title: 'כמות תורות בעדכון', value: army.updateTurns },
        { key: 'updateRecruits', title: 'כמות מגוייסים בעדכון', value: army.updateRecruits },
        { key: 'updateDiamonds', title: 'כמות יהלומים בעדכון', value: army.updateDiamonds },
    ]
}