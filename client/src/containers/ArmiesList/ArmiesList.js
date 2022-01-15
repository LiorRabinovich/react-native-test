import { useState, useEffect } from 'react'
import { FlatList, View } from 'react-native'

import { ArmiesListItem } from './ArmiesListItem'
import { fetchArmies } from '../../api/armies'

export function ArmiesList(data) {
    const [armies, setArmies] = useState([])

    useEffect(() => {
        const armiesAPI = fetchArmies()
        setArmies(armiesAPI)
    }, [])

    return (
        <FlatList
            data={armies}
            renderItem={({ item }) => (<ArmiesListItem {...item} />)}
        />
    )
}