'use client'
import { Category, Media } from "@/payload/payload-types"
import classes from './index.module.scss'
import Link from "next/link"
import { useFilter } from "@/app/_providers/Filter"
const CategoryCard = ({ category }: { category: Category }) => {
    const media = category.media as Media
    const { setCategoryFilters } = useFilter()
    return (
        <Link
            href={"/products"}
            className={classes.card}
            style={{ backgroundImage: `url(${media.url})` }}
            onClick={() => setCategoryFilters([category.id])}
        >
            <p className={classes.title}>{category.title}</p>

        </Link>
    )
}

export default CategoryCard