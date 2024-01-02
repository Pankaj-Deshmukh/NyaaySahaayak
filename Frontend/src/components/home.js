import React, {useState} from 'react';
import './css/home.css'


export default function Home() {
const [searchTerm,setSearchTerm] = useState('')

const handleSearch = () => {
  // Send the search term to the server
  fetch('http://localhost:3003/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ term: searchTerm }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error saving search history:', error));
};
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Home_Page</title>
          <link rel="stylesheet" href="home.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        </head>
        <body>
          <div className="Body">
            <div className="History">
              <div className="items"><h3 id="HistoryHeading">HISTORY</h3></div>
              <div className="items">
                <h4 className="heading">heading</h4>
                <p className="hystory-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sequi.</p>
              </div>
              <div className="items">
                <h4 className="heading">heading</h4>
                <p className="hystory-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sequi.</p>
              </div>
              <div className="items">
                <h4 className="heading">heading</h4>
                <p className="hystory-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sequi.</p>
              </div>
              <div className="items">
                <h4 className="heading">heading</h4>
                <p className="hystory-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sequi.</p>
              </div>
              <div className="items">
                <h4 className="heading">heading</h4>
                <p className="hystory-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sequi.</p>
              </div>
              <div className="items">
                <h4 className="heading">heading</h4>
                <p className="hystory-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sequi.</p>
              </div>
              <div className="items">
                <h4 className="heading">heading</h4>
                <p className="hystory-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sequi.</p>
              </div>
            </div>
            <div className="Main-body">
              <button className="ProfileButton"><i className="fa-solid fa-user"></i></button>
              <div className="Header">
                <h1 className="body-heading">NyaaySahaayak</h1>
              </div>
              <div className="Middle">
                {/* comment the scroll-body to get the background image */}
                 <div className="scroll-body">
                 <div className="content-box">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus neque nemo provident modi quisquam ut alias quis quasi in ipsum veniam rerum facilis, nam sit doloremque distinctio dolore eum quidem ad eaque ullam? Harum in ullam nulla, recusandae ipsam repellat error enim, optio corporis repudiandae quisquam expedita corrupti debitis dolore quasi unde qui sunt possimus ut ex. Officiis tempora est molestiae minima dicta necessitatibus voluptatem, aut excepturi nulla ipsa veniam labore saepe esse placeat veritatis velit explicabo numquam sit iure nobis nemo sunt soluta eius harum. Quod totam beatae quidem aut? Commodi sit praesentium labore architecto ullam sequi rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sint ullam aliquam aspernatur unde qui nesciunt nulla molestiae molestias, distinctio alias vel dignissimos deserunt modi facilis quaerat praesentium necessitatibus sit, repellat repellendus. Repellat eveniet asperiores iure, neque eius magni minima voluptate, nesciunt blanditiis vero, suscipit facere assumenda repellendus ullam est? Quae corrupti sunt officia maxime provident! Nesciunt quisquam ex tempora impedit enim excepturi dolores maiores rerum voluptatem aut repudiandae, labore, sapiente non, atque obcaecati reprehenderit. Sit quasi sint, accusamus iure iste officiis id natus, magni reiciendis laborum, illo dignissimos eaque rem? Deserunt ratione vitae illum quam culpa. Dolorum, provident. Iste totam ipsam consectetur eum repudiandae aperiam sapiente! Voluptates explicabo amet similique est, suscipit repudiandae voluptatibus consequatur eveniet nam quo optio reiciendis officia? Minus ipsa asperiores repellendus consequatur optio? Sunt eos, doloribus assumenda dignissimos praesentium possimus ex odit iure saepe magni incidunt delectus! Odio illum ducimus atque est maxime voluptatum tenetur iste deleniti culpa corrupti non consectetur odit itaque repudiandae perspiciatis cum possimus, aspernatur ipsam quas veniam? Tenetur, assumenda eaque? Nam aliquam debitis error illum magnam sunt voluptate odio, culpa cum delectus quo? Maiores ab unde quisquam, at laudantium temporibus earum adipisci. Optio, esse sed. Ea est sapiente aliquam totam facere! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consequatur non ipsa praesentium deleniti molestias voluptatibus eos, facere dolor laudantium ex excepturi modi impedit autem veritatis fuga reprehenderit? Eligendi, ea repudiandae ut possimus necessitatibus vero accusamus tenetur laboriosam culpa laudantium quas maiores eum officia, adipisci quidem distinctio? Sequi, consectetur dolores nemo mollitia ipsum delectus perspiciatis veniam dignissimos reiciendis dicta maiores corporis beatae ullam cupiditate temporibus iusto voluptas? Molestias fugiat, quod, ullam optio reiciendis, iusto at eaque veniam modi ducimus repudiandae. Veniam repudiandae minus porro officiis officia vero, alias maxime minima tenetur. Unde, iusto repellat cupiditate asperiores modi dolores voluptatibus nihil distinctio ad? Aliquam odit quia, explicabo quod laudantium veniam dolorum velit rerum. Libero quisquam nemo praesentium quos. Voluptas consectetur quaerat consequuntur perspiciatis nam cumque enim? Accusantium dolore magni ullam vel, nostrum fugiat optio doloremque voluptatem modi unde possimus. Ipsa maiores sed atque non libero nam aut deleniti mollitia fugiat? Eos veritatis, corporis, reiciendis, modi velit quidem vero consequatur natus eius harum esse accusantium expedita amet ratione dolorem tempore reprehenderit alias! Suscipit ad eaque minima reiciendis saepe expedita ea repudiandae quidem velit, nostrum aliquid corrupti tenetur neque dolores molestiae itaque atque labore enim libero. Ipsum delectus natus blanditiis laudantium omnis earum.
                  </div>
                </div> 
              </div>
              <div className="Footer">
                <input className="SearchBar" placeholder="Search..." type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                  <button className="SearchButton" onClick={handleSearch}><i className="fa-solid fa-search"></i></button>
                  <button className="voice-search"><i className="fa-solid fa-microphone"></i></button>
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  )
}
