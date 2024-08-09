import Card from "../Card/Card";
import "./Item.style.css";
import thumbnail from "../assets/card1.jpg";

const Item = () => {
    return (
        <div className="item-container">
            <div className="item-controls">
                <p>Showing 1- 10 of 100</p>
                <div className="controls-right">
                    <p>Show per page:</p>
                    <select>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                    <p>Sort by:</p>
                    <select>
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
            </div>
            <div className="item-list">
                <Card 
                    thumbnail={thumbnail} 
                    date="5 SEPTEMBER 2022" 
                    title="Kenali Tingkat Influencers berdasarkan Jumlah Followers" 
                />
                <Card 
                    thumbnail={thumbnail} 
                    date="5 SEPTEMBER 2022" 
                    title="Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Supaya Meningkatkan" 
                />
                <Card 
                    thumbnail={thumbnail} 
                    date="5 SEPTEMBER 2022" 
                    title="Kenali Tingkat Influencers berdasarkan Jumlah Followers" 
                />
                <Card 
                    thumbnail={thumbnail} 
                    date="5 SEPTEMBER 2022" 
                    title="Kenali Tingkat Influencers berdasarkan Jumlah Followers" 
                />
                <Card 
                    thumbnail={thumbnail} 
                    date="5 SEPTEMBER 2022" 
                    title="Kenali Tingkat Influencers berdasarkan Jumlah Followers" 
                />
                <Card 
                    thumbnail={thumbnail} 
                    date="5 SEPTEMBER 2022" 
                    title="Kenali Tingkat Influencers berdasarkan Jumlah Followers" 
                />
                <Card 
                    thumbnail={thumbnail} 
                    date="5 SEPTEMBER 2022" 
                    title="Kenali Tingkat Influencers berdasarkan Jumlah Followers" 
                />
                <Card 
                    thumbnail={thumbnail} 
                    date="5 SEPTEMBER 2022" 
                    title="Kenali Tingkat Influencers berdasarkan Jumlah Followers" 
                />
            </div>
            <div className="item-pagination">
                <button>&lt;</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>&gt;</button>
            </div>
        </div>
    )
}

export default Item;