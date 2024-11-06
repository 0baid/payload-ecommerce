import React from "react"
import classes from './index.module.scss'
import { Gutter } from "@/app/_components/Gutter"
import Filters from "./Filters"
import { Blocks } from "@/app/_components/Blocks"
import { Page,Category } from "@/payload/payload-types"
import { fetchDoc } from "@/app/_api/fetchDoc"
import { draftMode } from "next/headers"
import { fetchDocs } from "@/app/_api/fetchDocs"
import { HR } from "@/app/_components/HR"
const Products = async () => {

    const {isEnabled: isDraftMode} = draftMode()
    let page : Page | null = null
    let categories : Category[] | null = null

    try {
        page = await fetchDoc<Page>({
            collection: 'pages',
            slug: 'products',
            draft: isDraftMode
        })

        categories = await fetchDocs<Category>('categories')
    }catch (error) {
        console.log(error)
    }
    return (
        <div className={classes.container}>
            <Gutter className={classes.products}>
                <Filters categories={categories}/>
                <Blocks blocks={page.layout} disableTopPadding={true}/>
                <HR/>
            </Gutter>
        </div>
    )
}

export default Products