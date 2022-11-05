import { IMAGE_URL } from "../../../config"
import "./index.css"

type ImageType = {
  posterPath: string
}

export const Image = ({posterPath}: ImageType) => {
  return (
    <img className="imageAppImg" src={`${IMAGE_URL}/${posterPath}`} />
  )
}
