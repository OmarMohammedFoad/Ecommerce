import './Slider.css';

export default  function Slider()
{
    return (
        <>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
     
    <div className="carousel-item active">
    <div className='innner'>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3537541.jpg&f=1&nofb=1&ipt=896ebbb31a60b0737c617d8dc7ee4707a98b9edae873c3161518d712f0f0218e&ipo=images" className="d-block w-100   height-300 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F2593208.jpg&f=1&nofb=1&ipt=79042213270594e489967cf354f075a2682b977b87bf2c42584995d0a85a99df&ipo=images" className="d-block w-100  height-300 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fanalyticsindiamag.com%2Fwp-content%2Fuploads%2F2013%2F03%2Fprestashop.jpg&f=1&nofb=1&ipt=a3d90251ae23bceb530d6511d6028c8f569c49a6f2afc26a70e9c1da16695fcb&ipo=images" className="d-block w-100  height-300" alt="..."/>
    </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}