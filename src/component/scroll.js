import React from 'react';

function scroll(props) {
    return (
<div className ="container">
      <div className ="row">
        <div className ="col-md-9" style ={{backgroundColor:'red'}}>
          <div className ="row">
            <div className ="col-md-3">1</div>
            <div className ="col-md-3">2</div>
            <div className ="col-md-3">3</div>
            <div className ="col-md-3">4</div>
          </div>
        </div>
        <div className ="col-md-3">
          <div className ="right-box-1">
            <h1 className ="right-box-title">top phim</h1>
            <div className ="right-box-conten">
              <ul className ="scroll-bar">
                <li className ="list-item-1 p-1">
                <a  class="list-top-movie-link" title="Tiêu Diệt Các Trụ Cột - Warlords of Sigrdrifa" href="phim/tieu-diet-cac-tru-cot-11616/">
                  <div className ="row">
                    <div className ="col-md-6">
                      <img className ="img-fluid" src ={`https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg`} ></img>
                    </div>
                    <div className ="col-md-6">
                      <span class="list-top-movie-item-vn">Tiêu Diệt Các </span>
                      <span class="list-top-movie-item-en">Warlords of Sigrdrifa</span>
                     
                    </div>
                  </div>
                </a>
                </li>
                <li className ="list-item-1">Khi đọc kịch bản xong tôi lại bị thuyết phục. Phim “Thần tượng” năm 2013 đã rất thành công nên sau nhiều năm quay lại điện ảnh,.</li>
                <li className ="list-item-1">Thời điểm quay phim tôi rất bận, khi nhận lời mời phim này tôi cũng khá đắn đo vì thời điểm quay trước dự án âm nhạc cá nhân. </li>
                <li className ="list-item-1">Khi đọc kịch bản xong tôi lại bị thuyết phục. Phim “Thần tượng” năm 2013 đã rất thành công nên sau nhiều năm quay lại điện ảnh,</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    );
}

export default scroll;