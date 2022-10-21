import React, { useEffect, useState } from "react";
import { getTags } from "./TagManager";

export const TagList = () => {

  const [tags, setTags] = useState([])

  useEffect(() => {
    getTags().then(data => setTags(data))
  }, [])

  return (
    <article className="tags">
      {
        tags.map(tag => {
          return <section key={`tag--${tag.id}`}
            className="tag">
            <div className="tag__label">{tag.label}</div>
          </section>
        })
      }
    </article>
  )
}