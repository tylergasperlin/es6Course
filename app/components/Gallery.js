import React, {Component} from 'react';

class Gallery extends Component {
    render() {
        let alternative = 'https://www.nationalpetregister.org/assets/img/no-photo.jpg'
        return (
            <div> 
            {
                this.props.items.map((item, index) => {
                    let {title, imageLinks, infoLink} = item.volumeInfo;
                    return (
                        <a 
                        href={infoLink}
                        target="_blank"
                        key={index} className="book">
                        <img 
                        src={imageLinks !== undefined ? imageLinks.thumbnail : alternative} 
                        alt="book image"
                        className="book-img"
                        ></img>
                        <div className="book-text">
                        {title}

                        </div>
                        
                        
                        
                        </a>
                    )
                })
            }
             </div>
        )
    }
}

export default Gallery; 