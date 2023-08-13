import React from 'react'

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <> 
        <div class="wave-container wave">
            <p>© {year}, Developed & Designed with ❤️ by <a className='footer_faizan' target='_faizan' href='https://faizan619.github.io/Faizan_Portfolio/'>Faizan Alam</a></p>
        </div>
    </>
  )
}

export default Footer