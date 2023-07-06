import ElectricityPriceCardList from '@/src/components/Cards/ElectricityPriceCardList'
import SearchForm from '@/src/components/Cards/SearchForm'
import { Container } from '@mui/material'
import React, { useState } from 'react'
import moment from 'moment'
import { fetchFeedData } from '@/src/api/BaseApi'

const Compare = ({ data }) => {
    console.log(data)
    const [showResults, setShowResults] = useState(false)
    const [ele, setEle] = useState([])
    const topstories = data.filter(item => item.products[0].monthlyFee)

    const handleCheckPrice = (city, consumption, onComplete) => {
        setEle(topstories)
        setTimeout(() => {
            setShowResults(true)
            onComplete()
        }, 2000)
    }
  return (
        <Container>
            <SearchForm onCheckPrice={handleCheckPrice}/>
            {showResults && <ElectricityPriceCardList electro={ele}/>}
        </Container>
  )
}

export async function getServerSideProps() {
    const date = moment.utc().format("YYYY-MM-DD")

    try {
        const data = await fetchFeedData(date)
        return { props: { data }}
    } catch (error) {
        console.error('Failed to fetch data:', error)
        return { props: { data: []}}
    }
}

export default Compare