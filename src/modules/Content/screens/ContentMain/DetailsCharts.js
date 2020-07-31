import React from "react";
import Topbar from '../../../../../src/components/Topbar';
import LeftSidebar from '../../../../../src/components/LeftSidebar';
import ModalUser from '../../../../../src/components/ModalUser';
class DetailsCharts extends React.Component {
    render() {
        return (
            <>
                <body className="light-version left-side-menu-dark">
                    <div id="wrapper">
                        <Topbar/>
                        <LeftSidebar/>
                        <ModalUser />
                        <div className="content-page">
                            <div className="content py-3">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                    <div className="p-2 pb-0">
                                                        <ul className="nav nav-pills navtab-bg">
                                                            <li className="nav-item">
                                                                <a href="#p13-tongquan" data-toggle="tab"
                                                                   aria-expanded="true" className="nav-link active">
                                                                    Tổng quan
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a href="#p13-bieudomorong" data-toggle="tab"
                                                                   aria-expanded="false" className="nav-link">
                                                                    Biểu đồ mở rộng
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a href="#p13-baocaotaichinh" data-toggle="tab"
                                                                   aria-expanded="false" className="nav-link">
                                                                    Báo cáo tài chính
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                        <div class="tab-content p-0">
                                                            <div class="tab-pane show active" id="p13-tongquan">
                                                                <div class="p-2 pt-0">
                                                                    <div class="border border-light mb-3">
                                                                        <div class="py-1 px-2 bg-light d-flex flex-wrap justify-content-between">
                                                                            <div class="col-12 col-lg-6 d-flex align-items-center">
                                                                                <span>Công ty:</span>
                                                                                <input type="text" name="" id="input" class="ml-2 form-control form-control-sm w-200px" value="" placeholder="Nhập mã"/>
                                                                                    <button type="button" class="ml-2 btn btn-info btn-sm">Xác nhận</button>
                                                                            </div>
                                                                            <div class="col-12 col-lg-auto mt-1 mt-lg-0">
                                                                                <p class="mb-0">Close: <b>124</b> <span class="text-up"><i class="mdi mdi-arrow-up-bold"></i> -0.4 (-0.32% )</span>
                                                                                </p>
                                                                                <p class="mb-0">Volume: <b>124</b> <span class="text-down"><i class="mdi mdi-arrow-up-bold"></i> -0.4 (-0.32% )</span> <small>(00:31 21/11/2019)</small>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="p-2">
                                                                            <div class="d-flex mb-2">
                                                                                <div class="stock-bg-ava d-flex align-items-center justify-content-center bg-info">
                                                                                    VNM
                                                                                </div>
                                                                                <div class="col">
                                                                                    <h5 class="text-info mt-0">Công ty Cổ phần Sữa Việt Nam</h5>
                                                                                    <p class="mb-0">HSX - VINAMILK</p>
                                                                                    <a href="#" class="text-underline">www.vinamilk.com.vn</a>
                                                                                </div>
                                                                            </div>
                                                                            <div class="row">
                                                                                <div class="col-12 col-lg-6">
                                                                                    <div class="stock-table-info">
                                                                                        <table class="table table-dark table-xs table-bordered table-hover">
                                                                                            <thead>
                                                                                            <tr>
                                                                                                <th colspan="2" class="text-success">
                                                                                                    <i class="fa fa-caret-right" aria-hidden="true"></i> Chỉ tiêu định giá (Q3/2019)
                                                                                                </th>
                                                                                            </tr>
                                                                                            </thead>
                                                                                            <tbody>
                                                                                            <tr>
                                                                                                <td class="">Số CP đang lưu hành (cp)</td>
                                                                                                <td class="">1,741,377,694</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="">Vốn hóa thị trường (tỷ)</td>
                                                                                                <td class="">216,627</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="">EPS cơ bản 4QGN (đ/cp)</td>
                                                                                                <td class="">6,131</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="">EPS pha loãng (đ/cp)</td>
                                                                                                <td class="">6,133</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="">P/E pha loãng (lần)</td>
                                                                                                <td class="">20.29</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="">Book value (đ/cp)</td>
                                                                                                <td class="">15,654</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="">P/B (lần)</td>
                                                                                                <td class="">7.95</td>
                                                                                            </tr>
                                                                                            </tbody>
                                                                                            <thead>
                                                                                            <tr>
                                                                                                <th colspan="2" class="text-success">
                                                                                                    <i class="fa fa-caret-right" aria-hidden="true"></i> Chỉ tiêu thu nhập (Q3/2019)
                                                                                                </th>
                                                                                            </tr>
                                                                                            </thead>
                                                                                            <tbody>
                                                                                            <tr>
                                                                                                <td class="">Doanh thu thuần (tỷ)</td>
                                                                                                <td class="">14,290.90 </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="">Tăng trưởng doanh thu quý (YoY) (%)</td>
                                                                                                <td class="">4.05 </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="">Lợi nhuận sau thuế (tỷ)</td>
                                                                                                <td class="">2,690.19 </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="">Tăng trưởng LNST (YoY) (%)</td>
                                                                                                <td class="">5.08</td>
                                                                                            </tr>
                                                                                            </tbody>
                                                                                            <thead>
                                                                                            <tr>
                                                                                                <th colspan="2" class="text-success">
                                                                                                    <i class="fa fa-caret-right" aria-hidden="true"></i> Chỉ tiêu thu nhập năm (Năm 2018)
                                                                                                </th>
                                                                                            </tr>
                                                                                            </thead>
                                                                                            <tbody>
                                                                                            <tr>
                                                                                                <td class="">Doanh thu thuần (tỷ)</td>
                                                                                                <td class="">14,290.90 </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="">Tăng trưởng doanh thu (YoY) (%)</td>
                                                                                                <td class="">4.05 </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="">Lợi nhuận sau thuế (tỷ)</td>
                                                                                                <td class="">2,690.19 </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="">Tăng trưởng LNST (YoY) (%)</td>
                                                                                                <td class="">5.08</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="">ROIC</td>
                                                                                                <td class=""></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="">VCSH</td>
                                                                                                <td class=""></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="">Tăng trưởng VCSH (YoY) (%)</td>
                                                                                                <td class=""></td>
                                                                                            </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-12 col-lg-6">
                                                                                    <ul class="nav nav-tabs nav-bordered">
                                                                                        <li class="nav-item">
                                                                                            <a href="#tab-biendonggia" data-toggle="tab" aria-expanded="true" class="nav-link active">
                                                                                                Biến động giá
                                                                                            </a>
                                                                                        </li>
                                                                                        <li class="nav-item">
                                                                                            <a href="#tab-tangVDL" data-toggle="tab" aria-expanded="false" class="nav-link">
                                                                                                Tốc độ tăng VĐL
                                                                                            </a>
                                                                                        </li>
                                                                                        <li class="nav-item">
                                                                                            <a href="#tab-chiathuong" data-toggle="tab" aria-expanded="false" class="nav-link">
                                                                                                LS chia thưởng/cổ tức
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <div class="tab-content" id="tab-right-stock-info">
                                                                                        <div class="tab-pane show active" id="tab-biendonggia">
                                                                                            <div id="hchart1" class="toggle-chart content1"></div>
                                                                                        </div>
                                                                                        <div class="tab-pane" id="tab-tangVDL">
                                                                                            <div id="hchart4" class="toggle-chart content1"></div>
                                                                                        </div>
                                                                                        <div class="tab-pane" id="tab-chiathuong">
                                                                                            <div class="slimscroll scrollbar-inner chiathuong-scroll">
                                                                                                <div class="">
                                                                                                    <ul class="list-dividends list-unstyled">
                                                                                                        <li><span class="date">16/09/2019:</span><span class="text">Cổ tức bằng tiền 20%</span></li>
                                                                                                        <li><span class="date">05/06/2019:</span><span class="text">Cổ tức bằng tiền 15%</span></li>
                                                                                                        <li><span class="date">27/12/2018:</span><span class="text">Cổ tức bằng tiền 10%</span></li>
                                                                                                        <li><span class="date">05/09/2018:</span><span class="text">Cổ phiếu thưởng 5/1</span></li>
                                                                                                        <li><span class="date"></span><span class="text">Cổ tức bằng tiền 20%</span></li>
                                                                                                        <li><span class="date"></span><span class="text">Cổ phiếu thưởng 5/1</span></li>
                                                                                                        <li><span class="date">05/06/2018:</span><span class="text">Cổ tức bằng tiền 15%</span></li>
                                                                                                        <li><span class="date">28/12/2017:</span><span class="text">Cổ tức bằng tiền 15%</span></li>
                                                                                                        <li><span class="date">14/08/2017:</span><span class="text">Cổ tức bằng tiền 20%</span></li>
                                                                                                        <li><span class="date">04/05/2017:</span><span class="text">Cổ tức bằng tiền 20%</span></li>
                                                                                                        <li><span class="date">19/08/2016:</span><span class="text">Cổ phiếu thưởng 5/1</span></li>
                                                                                                        <li><span class="date"></span><span class="text">Cổ tức bằng tiền 40%</span></li>
                                                                                                        <li><span class="date">06/08/2016:</span><span class="text">Mua cổ phiếu quỹ. Khối lượng phát hành: -316,110</span></li>
                                                                                                        <li><span class="date">05/08/2016:</span><span class="text">Phát hành khác. Khối lượng phát hành: 8,887,731</span></li>
                                                                                                        <li><span class="date">03/06/2016:</span><span class="text">Cổ tức bằng tiền 20%</span></li>
                                                                                                        <li><span class="date">05/08/2015:</span><span class="text">Cổ phiếu thưởng 5/1</span></li>
                                                                                                        <li><span class="date"></span><span class="text">Cổ tức bằng tiền 40%</span></li>
                                                                                                        <li><span class="date">13/08/2014:</span><span class="text">Cổ phiếu thưởng 5/1</span></li>
                                                                                                        <li><span class="date"></span><span class="text">Cổ tức bằng tiền 20%</span></li>
                                                                                                        <li><span class="date">13/05/2014:</span><span class="text">Cổ tức bằng tiền 20%</span></li>
                                                                                                        <li><span class="date">16/12/2013:</span><span class="text">Cổ tức bằng tiền 8%</span></li>
                                                                                                        <li><span class="date">20/08/2013:</span><span class="text">Cổ tức bằng tiền 20%</span></li>
                                                                                                        <li><span class="date">14/06/2013:</span><span class="text">Cổ tức bằng tiền 18%</span></li>
                                                                                                        <li><span class="date">19/12/2012:</span><span class="text">Cổ phiếu thưởng 2/1</span></li>
                                                                                                        <li><span class="date">21/08/2012:</span><span class="text">Cổ tức bằng tiền 20%</span></li>
                                                                                                        <li><span class="date">06/04/2012:</span><span class="text">Cổ tức bằng tiền 20%</span></li>
                                                                                                        <li><span class="date">22/02/2012:</span><span class="text">Mua cổ phiếu quỹ. Khối lượng phát hành: 18,100</span></li>
                                                                                                        <li><span class="date">21/02/2012:</span><span class="text">Mua cổ phiếu quỹ. Khối lượng phát hành: 186,590</span></li>
                                                                                                        <li><span class="date">29/11/2011:</span><span class="text">Cổ phiếu thưởng 2/1</span></li>
                                                                                                        <li><span class="date">13/09/2011:</span><span class="text">Cổ tức bằng tiền 20%</span></li>
                                                                                                        <li><span class="date">25/08/2011:</span><span class="text">Mua cổ phiếu quỹ. Khối lượng phát hành: 7,530</span></li>
                                                                                                        <li><span class="date">01/07/2011:</span><span class="text">Phát hành nội bộ. Khối lượng phát hành: 14,254,910</span></li>
                                                                                                        <li><span class="date">06/06/2011:</span><span class="text">Mua cổ phiếu quỹ. Khối lượng phát hành: 8,700</span></li>
                                                                                                        <li><span class="date">13/05/2011:</span><span class="text">Mua cổ phiếu quỹ. Khối lượng phát hành: 21,420</span></li>
                                                                                                        <li><span class="date">09/04/2011:</span><span class="text">Mua cổ phiếu quỹ. Khối lượng phát hành: 7,750</span></li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <ul class="nav nav-pills navtab-bg">
                                                                            <li class="nav-item">
                                                                                <a href="#p13-tongquan-tintuc" data-toggle="tab" aria-expanded="true" class="nav-link active">
                                                                                    Tin tức
                                                                                </a>
                                                                            </li>
                                                                            <li class="nav-item">
                                                                                <a href="#p13-tongquan-codong" data-toggle="tab" aria-expanded="false" class="nav-link">
                                                                                    Cơ cấu cổ đông
                                                                                </a>
                                                                            </li>
                                                                            <li class="nav-item">
                                                                                <a href="#p13-tongquan-tailieu" data-toggle="tab" aria-expanded="false" class="nav-link">
                                                                                    Tài liệu lưu trữ
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                        <div class="tab-content">
                                                                            <div class="tab-pane show active" id="p13-tongquan-tintuc">
                                                                                <div class="list-events">
                                                                                    <ul class="list-dau-muc list-unstyled">
                                                                                        <li class="row-event mb-1">
                                                                                            <span class="doc-time text-muted fs-8">2019-10-30: </span>
                                                                                            <a class="text-hover-underline text-dark text-hover-info" href="#">
                                                                                                <span>Báo cáo kết quả phân phối chứng quyền có bảo đảm Chứng quyền CVNM03MBS19CE</span>
                                                                                            </a>
                                                                                            <i class="fa fa-download text-hover-info text-muted float-right cursor-pointer" aria-hidden="true" url="" title="" filename="" onclick="download(this)"></i>
                                                                                        </li>
                                                                                        <li class="row-event mb-1">
                                                                                            <span class="doc-time text-muted fs-8">2019-10-29: </span>
                                                                                            <a class="text-hover-underline text-dark text-hover-info" href="#">
                                                                                                <span>VNM: Ông Trịnh Quốc Dũng - GĐ điều hành đăng ký bán 50.000 cp</span>
                                                                                            </a>
                                                                                            <i class="fa fa-download text-hover-info text-muted float-right cursor-pointer" aria-hidden="true" url="" title="" filename="" onclick="download(this)"></i>
                                                                                        </li>
                                                                                        <li class="row-event mb-1">
                                                                                            <span class="doc-time text-muted fs-8">2019-10-28: </span>
                                                                                            <a class="text-hover-underline text-dark text-hover-info" href="#">
                                                                                                <span>Bản cáo bạch chào bán chứng quyền có bảo đảm Chứng quyền CVNM03MBS19CE</span>
                                                                                            </a>
                                                                                            <i class="fa fa-download text-hover-info text-muted float-right cursor-pointer" aria-hidden="true" url="" title="" filename="" onclick="download(this)"></i>
                                                                                        </li>
                                                                                        <li class="row-event mb-1">
                                                                                            <span class="doc-time text-muted fs-8">2019-10-28: </span>
                                                                                            <a class="text-hover-underline text-dark text-hover-info" href="#">
                                                                                                <span>Phát hành chứng quyền có bảo đảm Chứng quyền CVNM03MBS19CE</span>
                                                                                            </a>
                                                                                            <i class="fa fa-download text-hover-info text-muted float-right cursor-pointer" aria-hidden="true" url="" title="" filename="" onclick="download(this)"></i>
                                                                                        </li>
                                                                                        <li class="row-event mb-1">
                                                                                            <span class="doc-time text-muted fs-8">2019-10-24: </span>
                                                                                            <a class="text-hover-underline text-dark text-hover-info" href="#">
                                                                                                <span>UBCKNN cấp Giấy chứng nhận đăng ký chào bán chứng quyền có bảo đảm Chứng quyền CVNM03MBS19CE</span>
                                                                                            </a>
                                                                                            <i class="fa fa-download text-hover-info text-muted float-right cursor-pointer" aria-hidden="true" url="" title="" filename="" onclick="download(this)"></i>
                                                                                        </li>
                                                                                        <li class="row-event mb-1">
                                                                                            <span class="doc-time text-muted fs-8">2019-10-24: </span>
                                                                                            <a class="text-hover-underline text-dark text-hover-info" href="#">
                                                                                                <span>VNM: Ông Trịnh Quốc Dũng - Giám đốc đăng ký bán 50.000 cp</span>
                                                                                            </a>
                                                                                            <i class="fa fa-download text-hover-info text-muted float-right cursor-pointer" aria-hidden="true" url="" title="" filename="" onclick="download(this)"></i>
                                                                                        </li>
                                                                                        <li class="row-event mb-1">
                                                                                            <span class="doc-time text-muted fs-8">2019-10-22: </span>
                                                                                            <a class="text-hover-underline text-dark text-hover-info" href="#">
                                                                                                <span>CVNM1903: Chấp thuận đăng ký niêm yết chứng quyền có bảo đảm Chứng quyền CVNM1903</span>
                                                                                            </a>
                                                                                            <i class="fa fa-download text-hover-info text-muted float-right cursor-pointer" aria-hidden="true" url="" title="" filename="" onclick="download(this)"></i>
                                                                                        </li>
                                                                                        <li class="row-event mb-1">
                                                                                            <span class="doc-time text-muted fs-8">2019-10-21: </span>
                                                                                            <a class="text-hover-underline text-dark text-hover-info" href="#">
                                                                                                <span>Thứ trưởng Bộ Nông nghiệp Mỹ ấn tượng với siêu nhà máy sữa của Vinamilk</span>
                                                                                            </a>
                                                                                            <i class="fa fa-download text-hover-info text-muted float-right cursor-pointer" aria-hidden="true" url="" title="" filename="" onclick="download(this)"></i>
                                                                                        </li>
                                                                                        <li class="row-event mb-1">
                                                                                            <span class="doc-time text-muted fs-8">2019-10-16: </span>
                                                                                            <a class="text-hover-underline text-dark text-hover-info" href="#">
                                                                                                <span>VNM: F&amp;N Dairy Investments PTE.LTD chưa mua 17.413.777 cp</span>
                                                                                            </a>
                                                                                            <i class="fa fa-download text-hover-info text-muted float-right cursor-pointer" aria-hidden="true" url="" title="" filename="" onclick="download(this)"></i>
                                                                                        </li>
                                                                                        <li class="row-event mb-1">
                                                                                            <span class="doc-time text-muted fs-8">2019-10-16: </span>
                                                                                            <a class="text-hover-underline text-dark text-hover-info" href="#">
                                                                                                <span>VNM: F&amp;N Dairy Investments PTE.LTD đăng ký mua 17.413.</span>
                                                                                            </a>
                                                                                            <i class="fa fa-download text-hover-info text-muted float-right cursor-pointer" aria-hidden="true" url="" title="" filename="" onclick="download(this)"></i>
                                                                                        </li>
                                                                                        <li class="row-event mb-1">
                                                                                            <span class="doc-time text-muted fs-8">2019-10-11: </span>
                                                                                            <a class="text-hover-underline text-dark text-hover-info" href="#">
                                                                                                <span>VNM: Platinum Victory Pte. Ltd. đăng ký mua 17.414.205 cp</span>
                                                                                            </a>
                                                                                            <i class="fa fa-download text-hover-info text-muted float-right cursor-pointer" aria-hidden="true" url="" title="" filename="" onclick="download(this)"></i>
                                                                                        </li>
                                                                                        <li class="row-event mb-1">
                                                                                            <span class="doc-time text-muted fs-8">2019-10-11: </span>
                                                                                            <a class="text-hover-underline text-dark text-hover-info" href="#">
                                                                                                <span>VNM: Platinum Victory Pte. Ltd. chưa mua 17.413.777 cp</span>
                                                                                            </a>
                                                                                            <i class="fa fa-download text-hover-info text-muted float-right cursor-pointer" aria-hidden="true" url="" title="" filename="" onclick="download(this)"></i>
                                                                                        </li>
                                                                                        <li class="row-event mb-1">
                                                                                            <span class="doc-time text-muted fs-8">2019-10-11: </span>
                                                                                            <a class="text-hover-underline text-dark text-hover-info" href="#">
                                                                                                <span>Báo cáo kết quả phân phối chứng quyền có bảo đảm Chứng quyền VNM/6.5M/SSI/C/EU/Cash-01</span>
                                                                                            </a>
                                                                                            <i class="fa fa-download text-hover-info text-muted float-right cursor-pointer" aria-hidden="true" url="" title="" filename="" onclick="download(this)"></i>
                                                                                        </li>
                                                                                        <li class="row-event mb-1">
                                                                                            <span class="doc-time text-muted fs-8">2019-10-09: </span>
                                                                                            <a class="text-hover-underline text-dark text-hover-info" href="#">
                                                                                                <span>Báo cáo kết quả phân phối chứng quyền có bảo đảm Chứng quyền VNM-HSC-MET01</span>
                                                                                            </a>
                                                                                            <i class="fa fa-download text-hover-info text-muted float-right cursor-pointer" aria-hidden="true" url="" title="" filename="" onclick="download(this)"></i>
                                                                                        </li>
                                                                                        <li class="row-event mb-1">
                                                                                            <span class="doc-time text-muted fs-8">2019-10-07: </span>
                                                                                            <a class="text-hover-underline text-dark text-hover-info" href="#">
                                                                                                <span>Phát hành chứng quyền có bảo đảm Chứng quyền VNM/6.5M/SSI/C/EU/Cash-01</span>
                                                                                            </a>
                                                                                            <i class="fa fa-download text-hover-info text-muted float-right cursor-pointer" aria-hidden="true" url="" title="" filename="" onclick="download(this)"></i>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <nav>
                                                                                    <ul class="pagination">
                                                                                        <li class="page-item">
                                                                                            <a class="page-link" href="#" aria-label="Previous">
                                                                                                <span aria-hidden="true">Đầu</span>
                                                                                                <span class="sr-only">Trước</span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                                                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                                                        <li class="page-item"><a class="page-link" href="#">4</a></li>
                                                                                        <li class="page-item"><a class="page-link" href="#">5</a></li>
                                                                                        <li class="page-item">
                                                                                            <a class="page-link" href="#" aria-label="Next">
                                                                                                <span aria-hidden="true">Tiếp</span>
                                                                                                <span class="sr-only">Cuối</span>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </nav>
                                                                            </div>
                                                                            <div class="tab-pane" id="p13-tongquan-codong">
                                                                                <div class="row">
                                                                                    <div class="col-12 col-lg-6">
                                                                                        <table id="" class="table table-dark table-sm table-bordered">
                                                                                            <thead>
                                                                                            <tr>
                                                                                                <th colspan="2" class="bg-light">Cơ cấu cổ đông</th>
                                                                                            </tr>
                                                                                            </thead>
                                                                                            <tbody>
                                                                                            <tr>
                                                                                                <td>Nhà nước</td>
                                                                                                <td>39.33 %</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>Nhà đầu tư nước ngoài</td>
                                                                                                <td>59.82 %</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>Khác</td>
                                                                                                <td>0.85 %</td>
                                                                                            </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </div>
                                                                                    <div class="col-12 col-lg-6">
                                                                                        <div class="hchartCoDong-parent"><div id="hchartCoDong"></div></div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row">
                                                                                    <div class="col-12">
                                                                                        <table class="table table-dark table-sm table-bordered">
                                                                                            <thead>
                                                                                            <tr>
                                                                                                <th class="bg-light ">Cổ đông lớn</th>
                                                                                                <th class="bg-light ">Chức vụ</th>
                                                                                                <th class="bg-light text-center">CP nắm giữ</th>
                                                                                                <th class="bg-light text-center">Tỷ lệ</th>
                                                                                                <th class="bg-light text-center">Ngày công bố</th>
                                                                                            </tr>
                                                                                            </thead>
                                                                                            <tbody>
                                                                                            <tr>
                                                                                                <td>Tổng công ty Đầu tư và Kinh doanh vốn Nhà nước (SCIC)</td>
                                                                                                <td></td>
                                                                                                <td class="text-right">522,553,196</td>
                                                                                                <td class="text-right">36.006 %</td>
                                                                                                <td class="text-center">23/11/2017</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>F&N Dairy Investments Pte Ltd</td>
                                                                                                <td></td>
                                                                                                <td class="text-right">237,487,248</td>
                                                                                                <td class="text-right">16.364 %</td>
                                                                                                <td class="text-center">06/12/2017</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>Platinum Victory PTE.Ltd</td>
                                                                                                <td></td>
                                                                                                <td class="text-right">145,589,861</td>
                                                                                                <td class="text-right">10.032 %</td>
                                                                                                <td class="text-center">30/11/2017</td>
                                                                                            </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row mb-3">
                                                                                    <div class="col-12">
                                                                                        <ul class="nav nav-tabs nav-bordered">
                                                                                            <li class="nav-item">
                                                                                                <a href="#tab-thongtincoban" data-toggle="tab" aria-expanded="true" class="nav-link active">
                                                                                                    THÔNG TIN CƠ BẢN
                                                                                                </a>
                                                                                            </li>
                                                                                            <li class="nav-item">
                                                                                                <a href="#tab-banlanhdao" data-toggle="tab" aria-expanded="false" class="nav-link">
                                                                                                    BAN LÃNH ĐẠO
                                                                                                </a>
                                                                                            </li>
                                                                                        </ul>
                                                                                        <div class="tab-content">
                                                                                            <div class="tab-pane show active" id="tab-thongtincoban">
                                                                                                <div class="post-content border border-light px-3 py-2">
                                                                                                    <div style={{padding: '0px 5px 5px 5px', textAlign: 'left'}} id=""> <br/> <span id=""><b>
                                                                                                <font color="#fff">Nhóm ngành:</font>
                                                                                            </b></span> Sản phẩm sữa <br/> <span id=""><b>
                                                                                                <font color="#fff">Vốn điều lệ:</font>
                                                                                            </b></span> 14,514,534,290,000&nbsp;đồng<br/> <span id=""><b>
                                                                                                <font color="#fff">KL CP đang niêm yết:</font>
                                                                                            </b></span> 1,451,453,429&nbsp;cp<br/> <span id=""><b>
                                                                                                <font color="#fff">KL CP đang lưu hành:</font>
                                                                                            </b></span> 1,451,246,749&nbsp;cp<br/><br/>
                                                                                                        <div id="">
                                                                                                            <div id=""> <span style={{float:'left', paddingRight:5}}><b style={{color: '#fff'}}>Tổ chức tư vấn niêm yết:</b></span> <span style={{float: 'left', lineHeight:18, width:'70%'}}>- <a href="" target="">Công ty Cổ phần Chứng khoán Ngân hàng Đầu tư Và Phát triển Việt Nam</a> - MCK: <a href="" target="">BSI</a><br/></span> </div>
                                                                                                            <div id=""> <span style={{float:'left', paddingRight:5}}><b style={{color: '#fff'}}>Tổ chức kiểm toán:</b></span> <span style={{float: 'left', lineHeight:18, width:'70%'}} >- Công ty TNHH PriceWaterHouseCoopers Việt Nam - 2010<br/>- Công ty TNHH PriceWaterHouseCoopers Việt Nam - 2011<br/>- Công ty TNHH PriceWaterHouseCoopers Việt Nam - 2012<br/>- <a href="" target="">Công ty TNHH KPMG Việt Nam - 2013</a><br/>- <a href="" target="">Công ty TNHH KPMG Việt Nam - 2014</a><br/>- <a href="" target="">Công ty TNHH KPMG Việt Nam - 2015</a><br/>- <a href="" target="">Công ty TNHH KPMG Việt Nam - 2016</a><br/>- <a href="" target="">Công ty TNHH KPMG Việt Nam - 2017</a><br/></span> </div>
                                                                                                            <div id=""> </div>
                                                                                                        </div>
                                                                                                        <div style={{clear:'both'}}></div>
                                                                                                        <div style={{height:10, width:'100%', float:'left'}}></div> <span id=""><b>Giới thiệu:</b></span>
                                                                                                        <p style={{textAlign: 'justify'}}> <span style={{fontFamily: 'Arial', fontSize: '10pt'}}> <span style={{lineHeight: '115%', fontWeight: 'bold', fontFamily: 'Arial', fontSize: '10pt'}}>Lịch sử hình thành:</span> <br/> </span></p>
                                                                                                        <ul>
                                                                                                            <li style={{textAlign: 'justify'}}> <span style={{fontFamily: 'Arial', fontSize: '10pt'}}> <span style={{lineHeight: '115%', fontFamily: 'Arial', fontSize: '10pt'}}>Công ty cổ phần Sữa Việt Nam được thành lập dựa trên quyết định số 155/2003 QĐ-BCN ngày 01/10/2003 của Bộ Công nghiệp về việc chuyển Doanh nghiệp Nhà nước Công ty Sữa Việt Nam trực thuộc Bộ Công nghiệp thành công ty cổ phần Sữa Việt Nam. Tiền thân là&nbsp;</span> Công ty Sữa, Café miền Nam,trực thuộc Tổng Cục Công nghiệp Thực phẩm, với 2 đơn vị trực thuộc là Nhàmáy Sữa Thống Nhất và Nhà máy SữaTrường Thọ.<br style={{orphans: 2, textAlign: '-webkit-auto', widows: 2}}/> </span></li>
                                                                                                            <li style={{textAlign: 'justify'}}> <span style={{lineHeight: '115%'}}> <span style={{fontFamily: 'Arial', fontSize: '10pt'}}> Tháng 04/2004: Công ty sáp nhập nhà máy sữa Sài Gòn (SAIGONMILK), nâng tổng vốn điều lệ của Công ty lên 1.590 tỷ đồng.</span></span></li>
                                                                                                            <li style={{textAlign: 'justify'}}> <span style={{lineHeight: '115%'}}> <span style={{fontFamily: 'Arial', fontSize: '10pt'}}> Tháng 06/2005: Công ty mua lại phần vốn góp của đối tác trong Công ty Sữa Bình Định và sáp nhập vào Vinamilk.</span></span></li>
                                                                                                            <li style={{textAlign: 'justify'}}> <span style={{lineHeight: '115%'}}> <span style={{fontFamily: 'Arial', fontSize: '10pt'}}>Cổ phiếu của công ty chính thức giao dịch trên trung tâm giao dịch chứng khoán thành phố Hồ Chí Minh vào ngày 19/01/2006 với khối lượng niêm yết là 159 triệu cổ phiếu.</span></span></li>
                                                                                                            <li style={{textAlign: 'justify'}}> <span style={{fontFamily: 'Arial', fontSize: '10pt'}}> <span style={{lineHeight: '115%', fontFamily: 'Arial', fontSize: '10pt'}}>Năm 2007&nbsp;</span> Mua cổ phần chi&nbsp;phối 55% của&nbsp;Công ty Sữa Lam&nbsp;Sơn vào tháng&nbsp;9/2007, có trụ&nbsp;sở tại Khu Công&nbsp;nghiệp Lễ Môn,&nbsp;tỉnh Thanh Hóa&nbsp;và đổi tên thành&nbsp;Công ty Cổ phần&nbsp;Sữa Lam Sơn<br style={{orphans: 2, textAlign: '-webkit-auto', widows: 2}}/> </span></li>
                                                                                                            <li style={{textAlign: 'justify'}}> <span style={{fontFamily: 'Arial', fontSize: '10pt'}}>Năm 2008 Khánh&nbsp;thành và&nbsp;đưa Nhà&nbsp;máy Sữa&nbsp;Tiên Sơn&nbsp;tại Hà Nội&nbsp;đi vào hoạt&nbsp;động.<br style={{orphans: 2, textAlign: '-webkit-auto', widows: 2}}/> </span></li>
                                                                                                            <li style={{textAlign: 'justify'}}> <span style={{fontFamily: 'Arial', fontSize: '10pt'}}>Năm 2009:&nbsp; Tháng 9,&nbsp;khánh thành&nbsp;trang trại bò&nbsp;sữa Nghệ An.&nbsp;Đây là trang&nbsp;trại bò sữa&nbsp;hiện đại nhất&nbsp;Việt Nam với&nbsp;quy mô trang&nbsp;trại là 3.000&nbsp;con bò sữa<br style={{orphans: 2, textAlign: '-webkit-auto', widows: 2}}/> </span></li>
                                                                                                            <li style={{textAlign: 'justify'}}> <span style={{fontFamily: 'Arial', fontSize: '10pt'}}>Năm 2010:&nbsp; Công ty thực hiện chiến lược&nbsp;đầu tư ra nước ngoài bằng&nbsp;việc liên doanh xây dựng một&nbsp;Nhà máy chế biến sữa tại New&nbsp;Zealand với vốn góp 10 triệu&nbsp;USD, bằng 19,3% vốn điều lệ.&nbsp;Nhận chuyển nhượng 100% vốn&nbsp;từ Công ty TNHH F&amp;N Việt Nam&nbsp;và đổi tên thành Nhà máy Sữa&nbsp;bột Việt Nam. Đây là dự án xây&nbsp;mới 100% Nhà máy Sữa bột thứ&nbsp;hai của Công ty.&nbsp;Mua thâu tóm 100% cổ phần&nbsp;còn lại tại Công ty Cổ phần Sữa&nbsp;Lam Sơn để trở thành Công ty&nbsp;TNHH MTV Sữa Lam Sơn.&nbsp;Khánh thành và đưa Nhà máy&nbsp;Nước giải khát tại Bình Dương&nbsp;đi vào hoạt động.&nbsp;Công ty Cổ phần Sữa Việt Nam&nbsp;- Vinamilk đã được Forbes Asia&nbsp;vinh danh và trao giải thưởng&nbsp;Top 200 Doanh nghiệp xuất sắc&nbsp;nhất khu vực châu Á năm 2012.&nbsp;Đây là lần đầu tiên và duy nhất&nbsp;một công ty Việt Nam được&nbsp;Forbes Asia ghi nhận trong&nbsp;danh sách này.<br style={{orphans: 2, textAlign: '-webkit-auto', widows: 2}}/> </span></li>
                                                                                                            <li style={{textAlign: 'justify'}}> <span style={{fontFamily: 'Arial', fontSize: '10pt'}}>Năm 2012:&nbsp; Tháng&nbsp;6/2012, Nhà&nbsp;máy Sữa Đà&nbsp;Nẵng đi vào&nbsp;hoạt động và&nbsp;chính thức&nbsp;sản xuất&nbsp;thương mại.<br style={{orphans: 2, textAlign: '-webkit-auto', widows: 2}}/> </span></li>
                                                                                                            <li style={{textAlign: 'justify'}}> <span style={{fontFamily: 'Arial', fontSize: '10pt'}}>Năm 2013:&nbsp; Ngày 21/10/2013, Sở Kế&nbsp;hoạch và Đầu tư tỉnh Thanh&nbsp;Hóa cấp Giấy chứng nhận&nbsp;đăng ký doanh nghiệp&nbsp;cho Công ty TNHH Bò sữa&nbsp;Thống Nhất Thanh Hóa.&nbsp;Trong đó, Vinamilk nắm&nbsp;giữ 96,11% vốn điều lệ và&nbsp;trở thành Công ty mẹ nắm&nbsp;quyền chi phối tại doanh&nbsp;nghiệp này.&nbsp;Ngày 6/12/2013, Bộ Kế<br/> hoạch và Đầu tư cấp Giấy&nbsp;chứng nhận đầu tư số&nbsp;663/BKHĐT-ĐTRNN cho&nbsp;Công ty về việc Công ty&nbsp;mua cổ phần chi phối&nbsp;(70%) tại Driftwood Dairy<br/> Holdings Corporation, tại&nbsp;bang California, Mỹ.<br style={{orphans: 2, textAlign: '-webkit-auto', widows: 2}}/> </span></li>
                                                                                                            <li style={{textAlign: 'justify'}}> <span style={{fontFamily: 'Arial', fontSize: '10pt'}}>Năm 2014:&nbsp; Ngày 21/10/2013, Sở Kế&nbsp;hoạch và Đầu tư tỉnh Thanh&nbsp;Hóa cấp Giấy chứng nhận&nbsp;đăng ký doanh nghiệp&nbsp;cho Công ty TNHH Bò sữa&nbsp;Thống Nhất Thanh Hóa.&nbsp;Trong đó, Vinamilk nắm&nbsp;giữ 96,11% vốn điều lệ và&nbsp;trở thành Công ty mẹ nắm&nbsp;quyền chi phối tại doanh&nbsp;nghiệp này.&nbsp;Ngày 6/12/2013, Bộ Kế&nbsp;hoạch và Đầu tư cấp Giấy&nbsp;chứng nhận đầu tư số&nbsp;663/BKHĐT-ĐTRNN cho&nbsp;Công ty về việc Công ty&nbsp;mua cổ phần chi phối&nbsp;(70%) tại Driftwood Dairy&nbsp;Holdings Corporation, tại&nbsp;bang California, Mỹ.<br style={{orphans: 2, textAlign: '-webkit-auto', widows: 2}}/> </span></li>
                                                                                                            <li style={{textAlign: 'justify'}}> <span style={{fontFamily: 'Arial', fontSize: '10pt'}}>Năm 2015:&nbsp; Ngày 6/7/2015,&nbsp;Bộ Kế hoạch và&nbsp;Đầu tư đã cấp&nbsp;Giấy chứng nhận&nbsp;đăng ký đầu tư&nbsp;ra nước ngoài số&nbsp;201500001, chấp&nbsp;nhận cho Vinamilk&nbsp;tăng vốn đầu tư&nbsp;tại Miraka Limited&nbsp;từ 19,3% lên&nbsp;22,81%.<br style={{orphans: 2, textAlign: '-webkit-auto', widows: 2}}/> </span></li>
                                                                                                        </ul>
                                                                                                        <p style={{textAlign: 'justify'}}> <span style={{lineHeight: '115%'}}> <span style={{fontFamily: 'Arial', fontSize: '10pt'}}> <span style={{fontWeight: 'bold', fontFamily: 'Arial', fontSize: '10pt'}}>Lĩnh vực kinh doanh chính:&nbsp;</span></span></span></p>
                                                                                                        <p style={{textAlign: 'justify'}}> <span style={{fontFamily: 'Arial'}}>Những hoạt động chính tạo ra doanh thu và lợi nhuận của Công ty như sau:</span><br/> </p>
                                                                                                        <ul>
                                                                                                            <li style={{fontSize: '10pt', fontFamily: 'Arial'}}> <span style={{fontWeight: 'bold'}}>Chế biến, sản xuất và kinh doanh </span> <span style={{fontSize: '10pt'}}>sữa tươi, sữa hộp, sữa bột, bột&nbsp;</span> <span style={{fontSize: '10pt'}}>dinh dưỡng, sữa chua, sữa đặc, sữa đậu nành, nước giải khát và các&nbsp;</span> <span style={{fontSize: '10pt'}}>sản phẩm từ sữa khác.</span></li>
                                                                                                            <li style={{fontSize: '10pt', fontFamily: 'Arial'}}> <span style={{fontWeight: 'bold'}}>&nbsp;Chăn nuôi: </span> <span style={{fontSize: '10pt'}}>Chăn nuôi bò sữa. Hoạt động chăn nuôi nhằm mục đích&nbsp;</span> <span style={{fontSize: '10pt'}}>chính là cung cấp sữa tươi nguyên liệu đầu vào cho sản xuất các sản&nbsp;</span> <span style={{fontSize: '10pt'}}>phẩm từ sữa của Công ty.</span></li>
                                                                                                            <li> <span style={{fontSize: '10pt'}}> <span style={{fontFamily: 'Arial'}}>Có hơn 200 sản phẩm được chia thành các ngành hàng sau:&nbsp; </span> <span style={{fontFamily: 'Arial'}}>Sữa nước,&nbsp;Sữa chua,&nbsp;Sữa bột,&nbsp;Bột ăn dặm,&nbsp;Ca cao lúa mạch,&nbsp;Sữa đặc,&nbsp;Kem ăn,&nbsp;Phô mai,&nbsp;Sữa đậu nành,&nbsp;Nước giải khát</span></span><br style={{orphans: 2, textAlign: '-webkit-auto', widows: 2}}/> </li>
                                                                                                        </ul>
                                                                                                        <p>&nbsp;</p>
                                                                                                        <p><b>Địa chỉ:</b> Số 10, đường Tân Trào, P.Tân Phú, Quận 7, Tp.HCM</p>
                                                                                                        <p><b>Điện thoại:</b> 84-(8) 54 155 555 Fax: 84-(8) 54 161 230</p>
                                                                                                        <p><b>Người công bố thông tin:</b> Bà Mai Kiều Liên</p>
                                                                                                        <p><b>Email:</b> <a href="">vinamilk@vinamilk.com.vn </a></p>
                                                                                                        <p><b>Website:</b> <a href="" target="">http:/www.vinamilk.com.vn</a></p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="tab-pane" id="tab-banlanhdao">
                                                                                                <section id="BanLanhDao">
                                                                                                    <h5 class="mb-2">HỘI ĐỒNG QUẢN TRỊ</h5>
                                                                                                    <table class="table table-dark table-sm table-bordered">
                                                                                                        <tbody>
                                                                                                        <tr>
                                                                                                            <td class="w-150px"> Chức vụ </td>
                                                                                                            <td class="w-250px"> Họ tên </td>
                                                                                                            <td class="w-150px"> </td>
                                                                                                            <td class="w-150px text-center"> Tuổi </td>
                                                                                                            <td class="w-auto"> Quá trình công tác </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> Chủ tịch HĐQT </td>
                                                                                                            <td> <a href="#">Bà Lê Thị Băng Tâm</a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> <a href="#" title="Bà Lê Thị Băng Tâm">
                                                                                                                <img src="https://demo.dokit.io/w/images/avatars/dokitio_demomaster_3_l.jpg?r=1522079602" class="img-cover img-circle" width="45px" height="45px"/></a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> 71 </td>
                                                                                                            <td>
                                                                                                                <p>Từ 1969 - 10/1974: Giảng viên - Trường Đại học Tài chính kế toán Hà Nội Từ 1974 ...</p>
                                                                                                                <p class="text-right"><a href="#">Chi tiết...</a></p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> Thành viên HĐQT </td>
                                                                                                            <td> <a href="#">Bà Mai Kiều Liên</a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> <a href="#" title="Bà Mai Kiều Liên">
                                                                                                                <img src="https://demo.dokit.io/w/images/avatars/dokitio_demomaster_3_l.jpg?r=1522079602" class="img-cover img-circle" width="45px" height="45px"/></a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> 65 </td>
                                                                                                            <td>
                                                                                                                <p>- Bà Liên sinh năm 1953. Bà gia nhập Vinamilk ngay từ khi Vinamilk được thành lậ...</p>
                                                                                                                <p class="text-right"><a href="#">Chi tiết...</a></p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> Thành viên HĐQT </td>
                                                                                                            <td> <a href="#">Ông Lee Meng Tat</a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> <a href="#" title="Ông Lee Meng Tat">
                                                                                                                <img src="https://demo.dokit.io/w/images/avatars/dokitio_demomaster_3_l.jpg?r=1522079602" class="img-cover img-circle" width="45px" height="45px"/></a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> </td>
                                                                                                            <td>
                                                                                                                <p></p>
                                                                                                                <p class="text-right"><a href="#">Chi tiết...</a></p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> Thành viên HĐQT </td>
                                                                                                            <td> <a href="#">Ông Michael Chye Hin Fah</a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> <a href="#" title="Ông Michael Chye Hin Fah">
                                                                                                                <img src="https://demo.dokit.io/w/images/avatars/dokitio_demomaster_3_l.jpg?r=1522079602" class="img-cover img-circle" width="45px" height="45px"/></a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> </td>
                                                                                                            <td>
                                                                                                                <p></p>
                                                                                                                <p class="text-right"><a href="#">Chi tiết...</a></p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> Thành viên HĐQT </td>
                                                                                                            <td> <a href="#">Ông Nguyễn Bá Dương</a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> <a href="#" title="Ông Nguyễn Bá Dương">
                                                                                                                <img src="https://demo.dokit.io/w/images/avatars/dokitio_demomaster_3_l.jpg?r=1522079602" class="img-cover img-circle" width="45px" height="45px"/></a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> 59 </td>
                                                                                                            <td>
                                                                                                                <p>Từ tháng 08 năm 2004 đến ngày 03 tháng 07 năm 2017 : Tổng Giám đốc Công ty Cổ ph...</p>
                                                                                                                <p class="text-right"><a href="#">Chi tiết...</a></p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> Thành viên HĐQT </td>
                                                                                                            <td> <a href="#">Bà Đặng Thị Thu Hà</a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> <a href="#" title="Bà Đặng Thị Thu Hà">
                                                                                                                <img src="https://demo.dokit.io/w/images/avatars/dokitio_demomaster_3_l.jpg?r=1522079602" class="img-cover img-circle" width="45px" height="45px"/></a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> </td>
                                                                                                            <td>
                                                                                                                <p></p>
                                                                                                                <p class="text-right"><a href="#">Chi tiết...</a></p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> Thành viên HĐQT </td>
                                                                                                            <td> <a href="#">Ông Đỗ Lê Hùng</a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> <a href="#" title="Ông Đỗ Lê Hùng">
                                                                                                                <img src="https://demo.dokit.io/w/images/avatars/dokitio_demomaster_3_l.jpg?r=1522079602" class="img-cover img-circle" width="45px" height="45px"/></a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> </td>
                                                                                                            <td>
                                                                                                                <p></p>
                                                                                                                <p class="text-right"><a href="#">Chi tiết...</a></p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> Thành viên HĐQT </td>
                                                                                                            <td> <a href="#">Ông Lê Thành Liêm</a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> <a href="#" title="Ông Lê Thành Liêm">
                                                                                                                <img src="https://demo.dokit.io/w/images/avatars/dokitio_demomaster_3_l.jpg?r=1522079602" class="img-cover img-circle" width="45px" height="45px"/></a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> 45 </td>
                                                                                                            <td>
                                                                                                                <p>- Tháng 9/1994: Gia nhập Vinamilk với vị trí Nhân viên Phòng Kế toán. - Từ tháng...</p>
                                                                                                                <p class="text-right"><a href="#">Chi tiết...</a></p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> Thành viên HĐQT </td>
                                                                                                            <td> <a href="#">Ông Alain Xavier Cany</a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> <a href="#" title="Ông Alain Xavier Cany">
                                                                                                                <img src="https://demo.dokit.io/w/images/avatars/dokitio_demomaster_3_l.jpg?r=1522079602" class="img-cover img-circle" width="45px" height="45px"/></a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> 69 </td>
                                                                                                            <td>
                                                                                                                <p>Từ năm 2008 đến ngày 22 tháng 04 năm 2015 : Thành viên HĐQT Ngân hàng Thương mại...</p>
                                                                                                                <p class="text-right"><a href="#">Chi tiết...</a></p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> Thành viên HĐQT </td>
                                                                                                            <td> <a href="#">Ông Nguyễn Chí Thành</a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> <a href="#" title="Ông Nguyễn Chí Thành">
                                                                                                                <img src="https://demo.dokit.io/w/images/avatars/dokitio_demomaster_3_l.jpg?r=1522079602" class="img-cover img-circle" width="45px" height="45px"/></a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> 46 </td>
                                                                                                            <td>
                                                                                                                <p>Đến ngày 03 tháng 11 năm 2017 : Chủ tịch HĐQT Công ty Cổ phần Xuất nhập khẩu Y t...</p>
                                                                                                                <p class="text-right"><a href="#">Chi tiết...</a></p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                    <h5 class="mb-2">BAN GIÁM ĐỐC/KẾ TOÁN TRƯỞNG</h5>
                                                                                                    <table class="table table-dark table-sm table-bordered">
                                                                                                        <tbody>
                                                                                                        <tr>
                                                                                                            <td class="w-150px"> Chức vụ </td>
                                                                                                            <td class="w-250px"> Họ tên </td>
                                                                                                            <td class="w-150px"> </td>
                                                                                                            <td class="w-150px text-center"> Tuổi </td>
                                                                                                            <td class="w-auto"> Quá trình công tác </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> Tổng Giám đốc </td>
                                                                                                            <td> <a href="#" title="Bà Mai Kiều Liên">Bà Mai Kiều Liên</a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> <a href="#" title="Bà Mai Kiều Liên">
                                                                                                                <img src="https://demo.dokit.io/w/images/avatars/dokitio_demomaster_3_l.jpg?r=1522079602" class="img-cover img-circle" width="45px" height="45px"/></a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> 65 </td>
                                                                                                            <td>
                                                                                                                <p>- Bà Liên sinh năm 1953. Bà gia nhập Vinamilk ngay từ khi Vinamilk được thành lậ...</p>
                                                                                                                <p class="text-right"><a href="#">Chi tiết...</a></p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> Giám đốc Điều hành Nhân sự Hành chính &amp; Đối ngoại </td>
                                                                                                            <td> <a href="#" title="Bà Bùi Thị Hương">Bà Bùi Thị Hương</a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> <a href="#" title="Bà Bùi Thị Hương">
                                                                                                                <img src="https://demo.dokit.io/w/images/avatars/dokitio_demomaster_3_l.jpg?r=1522079602" class="img-cover img-circle" width="45px" height="45px"/></a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> 56 </td>
                                                                                                            <td>
                                                                                                                <p>- Trước khi gia nhập Vinamilk, Bà đã có 17 năm công tác tại Công ty Bóng đèn Điệ...</p>
                                                                                                                <p class="text-right"><a href="#">Chi tiết...</a></p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> GĐ ĐH Nghiên cứu và Phát triển </td>
                                                                                                            <td> <a href="#" title="Ông Nguyễn Quốc Khánh">Ông Nguyễn Quốc Khánh</a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> <a href="#" title="Ông Nguyễn Quốc Khánh">
                                                                                                                <img src="https://demo.dokit.io/w/images/avatars/dokitio_demomaster_3_l.jpg?r=1522079602" class="img-cover img-circle" width="45px" height="45px"/></a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> 54 </td>
                                                                                                            <td>
                                                                                                                <p>Từ ngày 09 tháng 01 năm 2015 đến ngày 24 tháng 12 năm 2015 : Giám đốc Điều hành ...</p>
                                                                                                                <p class="text-right"><a href="#">Chi tiết...</a></p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> GĐ ĐH Sản xuất </td>
                                                                                                            <td> <a href="#" title="Ông Trần Minh Văn">Ông Trần Minh Văn</a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> <a href="#" title="Ông Trần Minh Văn">
                                                                                                                <img src="https://demo.dokit.io/w/images/avatars/dokitio_demomaster_3_l.jpg?r=1522079602" class="img-cover img-circle" width="45px" height="45px"/></a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> 58 </td>
                                                                                                            <td>
                                                                                                                <p>Đến ngày 24 tháng 12 năm 2015 : Giám đốc Điều hành - Dự án Công ty Cổ phần Sữa V...</p>
                                                                                                                <p class="text-right"><a href="#">Chi tiết...</a></p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> Giám đốc Điều hành - Dự án </td>
                                                                                                            <td> <a href="#" title="Bà Ngô Thị Thu Trang">Bà Ngô Thị Thu Trang</a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> <a href="#" title="Bà Ngô Thị Thu Trang">
                                                                                                                <img src="https://demo.dokit.io/w/images/avatars/dokitio_demomaster_3_l.jpg?r=1522079602" class="img-cover img-circle" width="45px" height="45px"/></a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> 55 </td>
                                                                                                            <td>
                                                                                                                <p>Từ tháng 03 năm 2005 đến ngày 15 tháng 04 năm 2017 : Thành viên HĐQT Công ty Cổ ...</p>
                                                                                                                <p class="text-right"><a href="#">Chi tiết...</a></p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> Giám đốc Điều hành Chuỗi Cung Ứng </td>
                                                                                                            <td> <a href="#" title="Bà Nguyễn Thị Thanh Hòa">Bà Nguyễn Thị Thanh Hòa</a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> <a href="#" title="Bà Nguyễn Thị Thanh Hòa">
                                                                                                                <img src="https://demo.dokit.io/w/images/avatars/dokitio_demomaster_3_l.jpg?r=1522079602" class="img-cover img-circle" width="45px" height="45px"/></a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> 63 </td>
                                                                                                            <td>
                                                                                                                <p>Từ ngày 01 tháng 01 năm 2005 đến ngày 09 tháng 01 năm 2015 : Phó Tổng Giám đốc C...</p>
                                                                                                                <p class="text-right"><a href="#">Chi tiết...</a></p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> Giám đốc Điều hành Kinh doanh </td>
                                                                                                            <td> <a href="#" title="Ông Mai Hoài Anh">Ông Mai Hoài Anh</a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> <a href="#" title="Ông Mai Hoài Anh">
                                                                                                                <img src="https://demo.dokit.io/w/images/avatars/dokitio_demomaster_3_l.jpg?r=1522079602" class="img-cover img-circle" width="45px" height="45px"/></a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> 48 </td>
                                                                                                            <td>
                                                                                                                <p>- Từ tháng 2/1996 đến tháng 4/2001: Nhân viên Xuất nhập khẩu Phòng Xuất nhập khẩ...</p>
                                                                                                                <p class="text-right"><a href="#">Chi tiết...</a></p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> Giám đốc Điều hành Phát triển vùng nguyên liệu </td>
                                                                                                            <td> <a href="#" title="Ông Trịnh Quốc Dũng">Ông Trịnh Quốc Dũng</a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> <a href="#" title="Ông Trịnh Quốc Dũng">
                                                                                                                <img src="https://demo.dokit.io/w/images/avatars/dokitio_demomaster_3_l.jpg?r=1522079602" class="img-cover img-circle" width="45px" height="45px"/></a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> 56 </td>
                                                                                                            <td>
                                                                                                                <p>- Từ tháng 2/2005 đến tháng 7/2012: Ông giữ chức vụ Giám đốc Nhà máy Sữa Nghệ An...</p>
                                                                                                                <p class="text-right"><a href="#">Chi tiết...</a></p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> Giám đốc điều hành tài chính </td>
                                                                                                            <td> <a href="#" title="Ông Lê Thành Liêm">Ông Lê Thành Liêm</a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> <a href="#" title="Ông Lê Thành Liêm">
                                                                                                                <img src="https://demo.dokit.io/w/images/avatars/dokitio_demomaster_3_l.jpg?r=1522079602" class="img-cover img-circle" width="45px" height="45px"/></a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> 45 </td>
                                                                                                            <td>
                                                                                                                <p>- Tháng 9/1994: Gia nhập Vinamilk với vị trí Nhân viên Phòng Kế toán. - Từ tháng...</p>
                                                                                                                <p class="text-right"><a href="#">Chi tiết...</a></p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> Giám đốc Maketing </td>
                                                                                                            <td> <a href="#" title="Ông Phan Minh Tiên">Ông Phan Minh Tiên</a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> <a href="#" title="Ông Phan Minh Tiên">
                                                                                                                <img src="https://demo.dokit.io/w/images/avatars/dokitio_demomaster_3_l.jpg?r=1522079602" class="img-cover img-circle" width="45px" height="45px"/></a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> 48 </td>
                                                                                                            <td>
                                                                                                                <p>Trước khi gia nhập Vinamilk, Ông Tiên đã có 17 năm kinh nghiệm trong lĩnh vực Ma...</p>
                                                                                                                <p class="text-right"><a href="#">Chi tiết...</a></p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> Kế toán trưởng </td>
                                                                                                            <td> <a href="#" title="Ông Lê Thành Liêm">Ông Lê Thành Liêm</a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> <a href="#" title="Ông Lê Thành Liêm">
                                                                                                                <img src="https://demo.dokit.io/w/images/avatars/dokitio_demomaster_3_l.jpg?r=1522079602" class="img-cover img-circle" width="45px" height="45px"/></a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> 45 </td>
                                                                                                            <td>
                                                                                                                <p>- Tháng 9/1994: Gia nhập Vinamilk với vị trí Nhân viên Phòng Kế toán. - Từ tháng...</p>
                                                                                                                <p class="text-right"><a href="#">Chi tiết...</a></p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                    <h5 class="mb-2">VỊ TRÍ KHÁC</h5>
                                                                                                    <table class="table table-dark table-sm table-bordered">
                                                                                                        <tbody>
                                                                                                        <tr>
                                                                                                            <td class="w-150px"> Chức vụ </td>
                                                                                                            <td class="w-250px"> Họ tên </td>
                                                                                                            <td class="w-150px"> </td>
                                                                                                            <td class="w-150px text-center"> Tuổi </td>
                                                                                                            <td class="w-auto"> Quá trình công tác </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> Công bố thông tin </td>
                                                                                                            <td> <a href="#" title="Bà Mai Kiều Liên">Bà Mai Kiều Liên</a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> <a href="#" title="Bà Mai Kiều Liên">
                                                                                                                <img src="https://demo.dokit.io/w/images/avatars/dokitio_demomaster_3_l.jpg?r=1522079602" class="img-cover img-circle" width="45px" height="45px"/></a>
                                                                                                            </td>
                                                                                                            <td class="text-center"> 65 </td>
                                                                                                            <td>
                                                                                                                <p>- Bà Liên sinh năm 1953. Bà gia nhập Vinamilk ngay từ khi Vinamilk được thành lậ...</p>
                                                                                                                <p class="text-right"><a href="#">Chi tiết...</a></p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </section>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row">
                                                                                    <div class="col-12">
                                                                                        <p class="text-muted">Lưu ý: Dữ liệu được thu thập từ nhiều nguồn đáng tin cậy, nhà đầu tư tự chịu trách nhiệm khi sử dụng những dữ liệu này.</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="tab-pane" id="p13-tongquan-tailieu">
                                                                                <div class="p-3">
                                                                                    <div class="veq-document row border border-light">
                                                                                        <div class="col-lg-3 col-sm-4 col-xs-12 left border-0 px-3">
                                                                                            <div class="label-layout inline-block font-bold mb-2">Kỳ báo cáo</div>
                                                                                            <div class="select-options inline-block mb-2">
                                                                                                <select class="form-control form-control-sm">
                                                                                                    <option value="3">3 năm</option>
                                                                                                    <option value="5">5 năm</option>
                                                                                                    <option value="10">10 năm</option>
                                                                                                    <option value="0">Tất cả</option>
                                                                                                </select>
                                                                                            </div>
                                                                                            <div class="label-layout font-bold mb-2">Loại tài liệu</div>
                                                                                            <ul class="list-dau-muc list-unstyled">
                                                                                                <li class="active"> <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i><span>Tất cả</span></a> </li>
                                                                                                <li class=""> <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i><span>Báo cáo tài chính</span></a> </li>
                                                                                                <li> <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i><span>Nghị quyết</span></a> </li>
                                                                                                <li> <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i><span>Báo cáo thường niên</span></a> </li>
                                                                                                <li> <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i><span>Bản cáo bạch</span></a> </li>
                                                                                                <li> <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i><span>Báo cáo quản trị</span></a> </li>
                                                                                                <li> <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i><span>Báo cáo phân tích</span></a> </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div id="DocLinks" class="col-lg-9 col-sm-8 col-xs-12 left content pr-3">
                                                                                            <div id="Year2019" class="item  active"><time class="date-year">Năm 2019</time>
                                                                                                <ul class="list-dau-muc list-unstyled">
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Nghị quyết Hội đồng Quản trị</span>
                                                                                                            <span class="doc-time">(12/03/2019)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Nghị quyết Đại hội cổ đông thường niên</span>
                                                                                                            <span class="doc-time">(17/04/2019)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tình hình quản trị công ty</span>
                                                                                                            <span class="doc-time">(30/01/2019)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tình hình quản trị công ty</span>
                                                                                                            <span class="doc-time">(30/07/2019)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 3 năm 2019</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 3 năm 2019</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 2 năm 2019</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 2 năm 2019</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 1 năm 2019</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 1 năm 2019</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                </ul>
                                                                                            </div>
                                                                                            <div id="Year2018" class="item "><time class="date-year">Năm 2018</time>
                                                                                                <ul class="list-dau-muc list-unstyled">
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất năm 2018 (đã kiểm toán)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ năm 2018 (đã kiểm toán)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Nghị quyết Đại hội cổ đông thường niên</span>
                                                                                                            <span class="doc-time">(31/03/2018)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Nghị quyết Hội đồng Quản trị</span>
                                                                                                            <span class="doc-time">(30/11/2018)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tình hình quản trị công ty</span>
                                                                                                            <span class="doc-time">(30/01/2018)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tình hình quản trị công ty</span>
                                                                                                            <span class="doc-time">(30/07/2018)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 4 năm 2018</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 4 năm 2018</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 3 năm 2018 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 3 năm 2018 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 2 năm 2018</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 2 năm 2018</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 2 năm 2018 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 2 năm 2018 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 1 năm 2018 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 1 năm 2018 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                </ul>
                                                                                            </div>
                                                                                            <div id="Year2017" class="item "><time class="date-year">Năm 2017</time>
                                                                                                <ul class="list-dau-muc list-unstyled">
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ năm 2017 (đã kiểm toán)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất năm 2017 (đã kiểm toán)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Nghị quyết Đại hội cổ đông thường niên</span>
                                                                                                            <span class="doc-time">(15/04/2017)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Nghị quyết Hội đồng Quản trị</span>
                                                                                                            <span class="doc-time">(24/07/2017)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tình hình quản trị công ty</span>
                                                                                                            <span class="doc-time">(25/01/2017)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tình hình quản trị công ty</span>
                                                                                                            <span class="doc-time">(31/07/2017)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 4 năm 2017</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 4 năm 2017</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 3 năm 2017 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 3 năm 2017 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 2 năm 2017</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 2 năm 2017</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 2 năm 2017 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 2 năm 2017 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 1 năm 2017</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 1 năm 2017</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 1 năm 2017 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 1 năm 2017 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="tab-pane" id="p13-bieudomorong">
                                                                <div class="d-flex justify-content-center">
                                                                    <ul class="nav nav-tabs nav-bordered">
                                                                        <li class="nav-item">
                                                                            <a href="#bdmr-bieudonam" data-toggle="tab" aria-expanded="false" class="nav-link active">
                                                                                BIỂU ĐỒ NĂM
                                                                            </a>
                                                                            <li class="nav-item">
                                                                                <a href="#bdmr-bieudoquy" data-toggle="tab" aria-expanded="true" class="nav-link">
                                                                                    BIỂU ĐỒ QUÝ
                                                                                </a>
                                                                            </li>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="tab-content p-0">
                                                                    <div class="tab-pane show active" id="bdmr-bieudonam">
                                                                        <div class="py-2 tab-content-cust">
                                                                            <div class="row">
                                                                                <div class="col-12 col-md-6 col-xl-4">
                                                                                    <div class="card">
                                                                                        <div class="card-body">
                                                                                            <h4 class="text-white text-center mb-2">Doanh thu thuần</h4>
                                                                                            <div id="chart-dt-thuan"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-12 col-md-6 col-xl-4">
                                                                                    <div class="card">
                                                                                        <div class="card-body">
                                                                                            <h4 class="text-white text-center mb-2">Lợi nhuận cốt lõi</h4>
                                                                                            <div id="chart-ln-cotloi"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-12 col-md-6 col-xl-4">
                                                                                    <div class="card">
                                                                                        <div class="card-body">
                                                                                            <h4 class="text-white text-center mb-2">Lợi nhuận sau thuế</h4>
                                                                                            <div id="chart-ln-sauthue"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-12 col-md-6 col-xl-4">
                                                                                    <div class="card">
                                                                                        <div class="card-body">
                                                                                            <h4 class="text-white text-center mb-2">Phân tách chi phí</h4>
                                                                                            <div id="chart-phanrachiphi"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-12 col-md-6 col-xl-4">
                                                                                    <div class="card">
                                                                                        <div class="card-body">
                                                                                            <h4 class="text-white text-center mb-2">Phân tách lợi nhuận trước thuế</h4>
                                                                                            <div id="chart-ln-truocthue"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-12 col-md-6 col-xl-4">
                                                                                    <div class="card">
                                                                                        <div class="card-body">
                                                                                            <h4 class="text-white text-center mb-2">Phân rã lợi nhuận sau thuế</h4>
                                                                                            <div id="chart-pr-ln-sauthue"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-12 col-md-6 col-xl-4">
                                                                                    <div class="card">
                                                                                        <div class="card-body">
                                                                                            <h4 class="text-white text-center mb-2">Biên lợi lợi nhuận</h4>
                                                                                            <div id="chart-bl-loinhuan"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-12 col-md-6 col-xl-4">
                                                                                    <div class="card">
                                                                                        <div class="card-body">
                                                                                            <h4 class="text-white text-center mb-2">Định giá cổ phiếu</h4>
                                                                                            <div id="chart-dinhgia"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-12 col-md-6 col-xl-4">
                                                                                    <div class="card">
                                                                                        <div class="card-body">
                                                                                            <h4 class="text-white text-center mb-2">Phân tách Dupont</h4>
                                                                                            <div id="chart-dupont"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-12 col-md-6 col-xl-4">
                                                                                    <div class="card">
                                                                                        <div class="card-body">
                                                                                            <h4 class="text-white text-center mb-2">Tài sản</h4>
                                                                                            <div id="chart-taisan"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-12 col-md-6 col-xl-4">
                                                                                    <div class="card">
                                                                                        <div class="card-body">
                                                                                            <h4 class="text-white text-center mb-2">Nguồn vốn</h4>
                                                                                            <div id="chart-nguonvon"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-12 col-md-6 col-xl-4">
                                                                                    <div class="card">
                                                                                        <div class="card-body">
                                                                                            <h4 class="text-white text-center mb-2">Dòng tiền</h4>
                                                                                            <div id="chart-dongtien"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="tab-pane" id="bdmr-bieudoquy">
                                                                        <div class="py-2 tab-content-cust">
                                                                            <div class="row">
                                                                                <div class="col-12 col-md-6 col-xl-4">
                                                                                    <div class="card">
                                                                                        <div class="card-body">
                                                                                            <h4 class="text-white text-center mb-2">Doanh thu thuần</h4>
                                                                                            <div id="chart-quy-doanhthuthuan"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-12 col-md-6 col-xl-4">
                                                                                    <div class="card">
                                                                                        <div class="card-body">
                                                                                            <h4 class="text-white text-center mb-2">Lợi nhuận thuần quý</h4>
                                                                                            <div id="chart-quy-loinhuanthuan"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-12 col-md-6 col-xl-4">
                                                                                    <div class="card">
                                                                                        <div class="card-body">
                                                                                            <h4 class="text-white text-center mb-2">Định giá cổ phiếu</h4>
                                                                                            <div id="chart-quy-dinhgia"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-12 col-md-6 col-xl-4">
                                                                                    <div class="card">
                                                                                        <div class="card-body">
                                                                                            <h4 class="text-white text-center mb-2">Phân tách chi phí</h4>
                                                                                            <div id="chart-quy-phantachchiphi"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-12 col-md-6 col-xl-4">
                                                                                    <div class="card">
                                                                                        <div class="card-body">
                                                                                            <h4 class="text-white text-center mb-2">Phân tách lợi nhuận trước thuế</h4>
                                                                                            <div id="chart-quy-ptlntruocthue"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-12 col-md-6 col-xl-4">
                                                                                    <div class="card">
                                                                                        <div class="card-body">
                                                                                            <h4 class="text-white text-center mb-2">Phân tách Dupont</h4>
                                                                                            <div id="chart-quy-phantachdupont"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-12 col-md-6 col-xl-4">
                                                                                    <div class="card">
                                                                                        <div class="card-body">
                                                                                            <h4 class="text-white text-center mb-2">Tài sản</h4>
                                                                                            <div id="chart-quy-taisan"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-12 col-md-6 col-xl-4">
                                                                                    <div class="card">
                                                                                        <div class="card-body">
                                                                                            <h4 class="text-white text-center mb-2">Nguồn vốn</h4>
                                                                                            <div id="chart-quy-nguonvon"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-12 col-md-6 col-xl-4">
                                                                                    <div class="card">
                                                                                        <div class="card-body">
                                                                                            <h4 class="text-white text-center mb-2">Dòng tiền</h4>
                                                                                            <div id="chart-quy-dongtien"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="tab-pane" id="p13-baocaotaichinh">
                                                                <div class="p-2 pt-0">
                                                                    <div class="border border-light bg-light mb-3">
                                                                        <div class="py-1 px-2 d-flex flex-wrap align-items-center">
                                                                            <div class="mx-2 my-1 d-flex align-items-center">
                                                                                <span>Mã CP</span>
                                                                                <input type="text" name="" id="" class="ml-1 form-control form-control-sm w-100px" value="CTD" placeholder="Nhập mã"/>
                                                                            </div>
                                                                            <div class="mx-2 my-1 d-flex align-items-center">
                                                                                <span>Số kỳ</span>
                                                                                <select name="" id="" class="ml-1 form-control form-control-sm w-100px">
                                                                                    <option value="04">04</option>
                                                                                    <option value="05">05</option>
                                                                                    <option value="06">06</option>
                                                                                    <option value="07">07</option>
                                                                                    <option value="08" selected="">08</option>
                                                                                    <option value="09">09</option>
                                                                                    <option value="10">10</option>
                                                                                    <option value="11">11</option>
                                                                                    <option value="12">12</option>
                                                                                    <option value="13">13</option>
                                                                                    <option value="14">14</option>
                                                                                    <option value="15">15</option>
                                                                                    <option value="16">16</option>
                                                                                    <option value="17">17</option>
                                                                                    <option value="18">18</option>
                                                                                    <option value="19">19</option>
                                                                                    <option value="20">20</option>
                                                                                </select>
                                                                            </div>
                                                                            <div class="mx-2 my-1 d-flex align-items-center">
                                                                                <span>Kỳ BC</span>
                                                                                <select name="" id="" class="ml-1 form-control form-control-sm w-100px">
                                                                                    <option value="01" selected="">Quý 1</option>
                                                                                    <option value="02">Quý 2</option>
                                                                                    <option value="03">Quý 3</option>
                                                                                    <option value="04">Quý 4</option>
                                                                                    <option value="năm">Cả năm</option>
                                                                                </select>
                                                                                <select name="" id="" class="ml-1 form-control form-control-sm w-100px">
                                                                                    <option value="2019" selected="">2019</option>
                                                                                    <option value="2018">2018</option>
                                                                                    <option value="2017">2017</option>
                                                                                    <option value="2016">2016</option>
                                                                                    <option value="2015">2015</option>
                                                                                    <option value="2014">2014</option>
                                                                                    <option value="2013">2013</option>
                                                                                    <option value="2012">2012</option>
                                                                                    <option value="2011">2011</option>
                                                                                    <option value="2010">2010</option>
                                                                                    <option value="2009">2009</option>
                                                                                    <option value="2008">2008</option>
                                                                                    <option value="2007">2007</option>
                                                                                    <option value="2006">2006</option>
                                                                                    <option value="2005">2005</option>
                                                                                    <option value="2004">2004</option>
                                                                                    <option value="2003">2003</option>
                                                                                    <option value="2002">2002</option>
                                                                                    <option value="2001">2001</option>
                                                                                    <option value="2000">2000</option>
                                                                                </select>
                                                                            </div>
                                                                            <div class="mx-2 my-1 d-flex align-items-center">
                                                                                <span>Đơn vị</span>
                                                                                <select name="" id="" class="ml-1 form-control form-control-sm w-150px">
                                                                                    <option value="Đồng">Đồng</option>
                                                                                    <option value="Ngìn đồng" selected="">Ngìn đồng</option>
                                                                                    <option value="Triệu đồng">Triệu đồng</option>
                                                                                </select>
                                                                            </div>
                                                                            <button type="button" class="ml-2 my-1 btn btn-info btn-sm">Xác nhận</button>
                                                                        </div>
                                                                    </div>
                                                                    <div class="">
                                                                        <ul class="nav nav-pills navtab-bg nav-justified">
                                                                            <li class="nav-item">
                                                                                <a href="#bctc-tab-1" data-toggle="tab" aria-expanded="false" class="nav-link active">
                                                                                    CÂN ĐỐI KẾ TOÁN
                                                                                </a>
                                                                            </li>
                                                                            <li class="nav-item">
                                                                                <a href="#bctc-tab-2" data-toggle="tab" aria-expanded="true" class="nav-link">
                                                                                    KẾT QUẢ KINH DOANH
                                                                                </a>
                                                                            </li>
                                                                            <li class="nav-item">
                                                                                <a href="#bctc-tab-3" data-toggle="tab" aria-expanded="false" class="nav-link">
                                                                                    LCTT GIÁN TIẾP
                                                                                </a>
                                                                            </li>
                                                                            <li class="nav-item">
                                                                                <a href="#bctc-tab-4" data-toggle="tab" aria-expanded="false" class="nav-link">
                                                                                    LCTT TRỰC TIẾP
                                                                                </a>
                                                                            </li>
                                                                            <li class="nav-item">
                                                                                <a href="#bctc-tab-5" data-toggle="tab" aria-expanded="false" class="nav-link">
                                                                                    TÀI LIỆU LƯU TRỮ
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                        <div class="tab-content">
                                                                            <div class="tab-pane active" id="bctc-tab-1">
                                                                                <div class="table-responsive">
                                                                                    <table class="table-tree-grid useHover-table table table-dark table-xs fs-12 table-bordered table-hover controller" id="table_cdkt">
                                                                                        <thead>
                                                                                        <tr>
                                                                                            <th></th>
                                                                                            <th class="useHover-th text-right" data-col-hover="Q3">Q3/2019</th>
                                                                                            <th class="useHover-th text-right" data-col-hover="Q2">Q2/2019</th>
                                                                                            <th class="useHover-th text-right" data-col-hover="Q1">Q1/2019</th>
                                                                                            <th class="useHover-th text-right" data-col-hover="Q4">Q4/2018</th>
                                                                                            <th class="useHover-th text-right" data-col-hover="Q3">Q3/2018</th>
                                                                                            <th class="useHover-th text-right" data-col-hover="Q2">Q2/2018</th>
                                                                                            <th class="useHover-th text-right" data-col-hover="Q1">Q1/2018</th>
                                                                                            <th class="useHover-th text-right" data-col-hover="Q4">Q4/2017</th>
                                                                                        </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                        <tr class="treegrid-1">
                                                                                            <td class="bg-light font-bold fs-15">I - TÀI SẢN NGẮN HẠN</td>
                                                                                            <td class="bg-light text-right"><strong>13,393,155,680</strong></td>
                                                                                            <td class="bg-light text-right"><strong>14,117,402,049</strong></td>
                                                                                            <td class="bg-light text-right"><strong>13,541,501,080</strong></td>
                                                                                            <td class="bg-light text-right"><strong>15,323,459,277</strong></td>
                                                                                            <td class="bg-light text-right"><strong>13,720,623,217</strong></td>
                                                                                            <td class="bg-light text-right"><strong>13,910,669,211</strong></td>
                                                                                            <td class="bg-light text-right"><strong>12,900,867,361</strong></td>
                                                                                            <td class="bg-light text-right"><strong>14,464,271,122</strong></td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-2 treegrid-parent-1">
                                                                                            <td class="font-bold fs-14">1. Tiền &amp; tương đương tiền</td>
                                                                                            <td class="text-right"><strong>963,048,150</strong></td>
                                                                                            <td class="text-right"><strong>750,284,929</strong></td>
                                                                                            <td class="text-right"><strong>596,751,117</strong></td>
                                                                                            <td class="text-right"><strong>552,833,231</strong></td>
                                                                                            <td class="text-right"><strong>960,031,995</strong></td>
                                                                                            <td class="text-right"><strong>586,652,102</strong></td>
                                                                                            <td class="text-right"><strong>1,286,980,221</strong></td>
                                                                                            <td class="text-right"><strong>3,311,114,591</strong></td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-3 treegrid-parent-2">
                                                                                            <td>1.1. Tiền</td>
                                                                                            <td class="text-right">154,998,150</td>
                                                                                            <td class="text-right">248,384,929</td>
                                                                                            <td class="text-right">142,951,117</td>
                                                                                            <td class="text-right">149,333,231</td>
                                                                                            <td class="text-right">325,531,995</td>
                                                                                            <td class="text-right">178,152,102</td>
                                                                                            <td class="text-right">246,980,221</td>
                                                                                            <td class="text-right">285,114,591</td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-4 treegrid-parent-2">
                                                                                            <td>1.2. Các khoản tương đương tiền</td>
                                                                                            <td class="text-right">808,050,000</td>
                                                                                            <td class="text-right">501,900,000</td>
                                                                                            <td class="text-right">453,800,000</td>
                                                                                            <td class="text-right">403,500,000</td>
                                                                                            <td class="text-right">634,500,000</td>
                                                                                            <td class="text-right">408,500,000</td>
                                                                                            <td class="text-right">1,040,000,000</td>
                                                                                            <td class="text-right">3,026,000,000</td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-5 treegrid-parent-1">
                                                                                            <td  class="font-bold fs-14">2. Các khoản ĐT tài chính ngắn hạn</td>
                                                                                            <td class="text-right"><strong>3,012,198,000</strong></td>
                                                                                            <td class="text-right"><strong>3,665,561,000</strong></td>
                                                                                            <td class="text-right"><strong>3,873,058,000</strong></td>
                                                                                            <td class="text-right"><strong>3,907,058,000</strong></td>
                                                                                            <td class="text-right"><strong>4,016,930,000</strong></td>
                                                                                            <td class="text-right"><strong>4,134,627,000</strong></td>
                                                                                            <td class="text-right"><strong>3,848,127,000</strong></td>
                                                                                            <td class="text-right"><strong>2,478,527,000</strong></td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-6 treegrid-parent-5">
                                                                                            <td>2.1. Chứng khoán kinh doanh</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-7 treegrid-parent-5">
                                                                                            <td>2.2. Dự phòng giảm giá CK KD</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-8 treegrid-parent-5">
                                                                                            <td>2.3. Đầu tư nắm giữ đến ngày đáo hạn</td>
                                                                                            <td class="text-right">3,012,198,000</td>
                                                                                            <td class="text-right">3,665,561,000</td>
                                                                                            <td class="text-right">3,873,058,000</td>
                                                                                            <td class="text-right">3,907,058,000</td>
                                                                                            <td class="text-right">4,016,930,000</td>
                                                                                            <td class="text-right">4,134,627,000</td>
                                                                                            <td class="text-right">3,848,127,000</td>
                                                                                            <td class="text-right">2,478,527,000</td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-9 treegrid-parent-1">
                                                                                            <td  class="font-bold fs-14">3. Các khoản phải thu ngắn hạn</td>
                                                                                            <td class="text-right"><strong>7,672,251,323</strong></td>
                                                                                            <td class="text-right"><strong>7,814,726,222</strong></td>
                                                                                            <td class="text-right"><strong>7,073,304,565</strong></td>
                                                                                            <td class="text-right"><strong>9,053,952,559</strong></td>
                                                                                            <td class="text-right"><strong>7,006,937,568</strong></td>
                                                                                            <td class="text-right"><strong>6,980,040,764</strong></td>
                                                                                            <td class="text-right"><strong>5,151,021,562</strong></td>
                                                                                            <td class="text-right"><strong>6,480,158,421</strong></td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-10 treegrid-parent-9">
                                                                                            <td>3.1. Phải thu khách hàng</td>
                                                                                            <td class="text-right">6,833,725,316</td>
                                                                                            <td class="text-right">7,048,109,683</td>
                                                                                            <td class="text-right">6,481,904,230</td>
                                                                                            <td class="text-right">8,583,155,443</td>
                                                                                            <td class="text-right">6,596,689,028</td>
                                                                                            <td class="text-right">6,510,740,390</td>
                                                                                            <td class="text-right">4,735,384,799</td>
                                                                                            <td class="text-right">6,203,035,193</td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-11 treegrid-parent-9">
                                                                                            <td>3.2. Trả trước cho người bán</td>
                                                                                            <td class="text-right">822,891,562</td>
                                                                                            <td class="text-right">732,321,140</td>
                                                                                            <td class="text-right">601,261,421</td>
                                                                                            <td class="text-right">408,522,628</td>
                                                                                            <td class="text-right">284,787,978</td>
                                                                                            <td class="text-right">379,368,268</td>
                                                                                            <td class="text-right">321,401,430</td>
                                                                                            <td class="text-right">169,888,237</td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-12 treegrid-parent-9">
                                                                                            <td>3.3. Phải thu nội bộ ngắn hạn</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-13 treegrid-parent-9">
                                                                                            <td>3.4. Phải thu theo tiến độ Kế hoạch HĐXD</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-14 treegrid-parent-9">
                                                                                            <td>3.5. Phải thu về cho vay ngắn hạn</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-15 treegrid-parent-9">
                                                                                            <td>3.6. Các khoản phải thu khác</td>
                                                                                            <td class="text-right">230,142,208</td>
                                                                                            <td class="text-right">244,157,296</td>
                                                                                            <td class="text-right">200,000,812</td>
                                                                                            <td class="text-right">272,136,386</td>
                                                                                            <td class="text-right">335,322,461</td>
                                                                                            <td class="text-right">299,794,005</td>
                                                                                            <td class="text-right">304,097,232</td>
                                                                                            <td class="text-right">317,096,889</td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-16 treegrid-parent-9">
                                                                                            <td>3.7. Dự phòng phải thu ngắn hạn khó đòi</td>
                                                                                            <td class="text-right">-214,507,763</td>
                                                                                            <td class="text-right">-209,861,898</td>
                                                                                            <td class="text-right">-209,861,898</td>
                                                                                            <td class="text-right">-209,861,898</td>
                                                                                            <td class="text-right">-209,861,898</td>
                                                                                            <td class="text-right">-209,861,898</td>
                                                                                            <td class="text-right">-209,861,898</td>
                                                                                            <td class="text-right">-209,861,898</td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-17 treegrid-parent-9">
                                                                                            <td>3.8. Tài sản thiếu chờ xử lý</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-18 treegrid-parent-1">
                                                                                            <td  class="font-bold fs-14">4. Hàng tồn kho</td>
                                                                                            <td class="text-right"><strong>1,515,655,627</strong></td>
                                                                                            <td class="text-right"><strong>1,411,386,012</strong></td>
                                                                                            <td class="text-right"><strong>1,541,867,122</strong></td>
                                                                                            <td class="text-right"><strong>1,443,523,977</strong></td>
                                                                                            <td class="text-right"><strong>1,433,901,163</strong></td>
                                                                                            <td class="text-right"><strong>1,907,491,574</strong></td>
                                                                                            <td class="text-right"><strong>2,286,610,290</strong></td>
                                                                                            <td class="text-right"><strong>1,873,811,750</strong></td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-19 treegrid-parent-18">
                                                                                            <td>4.1. Hàng tồn kho</td>
                                                                                            <td class="text-right">1,515,655,627</td>
                                                                                            <td class="text-right">1,411,386,012</td>
                                                                                            <td class="text-right">1,541,867,122</td>
                                                                                            <td class="text-right">1,443,523,977</td>
                                                                                            <td class="text-right">1,433,901,163</td>
                                                                                            <td class="text-right">1,907,491,574</td>
                                                                                            <td class="text-right">2,286,610,290</td>
                                                                                            <td class="text-right">1,873,811,750</td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-20 treegrid-parent-18">
                                                                                            <td>4.2. Dự phòng giảm giá hàng tồn kho</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-21 treegrid-parent-1">
                                                                                            <td class="font-bold fs-14">5. Tài sản ngắn hạn khác</td>
                                                                                            <td class="text-right"><strong>230,002,579</strong></td>
                                                                                            <td class="text-right"><strong>475,443,885</strong></td>
                                                                                            <td class="text-right"><strong>456,520,276</strong></td>
                                                                                            <td class="text-right"><strong>366,091,510</strong></td>
                                                                                            <td class="text-right"><strong>302,822,490</strong></td>
                                                                                            <td class="text-right"><strong>301,857,772</strong></td>
                                                                                            <td class="text-right"><strong>328,128,287</strong></td>
                                                                                            <td class="text-right"><strong>320,659,361</strong></td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-22 treegrid-parent-21">
                                                                                            <td>5.1. Chi phí trả trước ngắn hạn</td>
                                                                                            <td class="text-right">1,581,193</td>
                                                                                            <td class="text-right">1,509,758</td>
                                                                                            <td class="text-right">1,969,657</td>
                                                                                            <td class="text-right">3,715,159</td>
                                                                                            <td class="text-right">9,111,031</td>
                                                                                            <td class="text-right">8,629,819</td>
                                                                                            <td class="text-right">9,484,986</td>
                                                                                            <td class="text-right">14,790,918</td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-23 treegrid-parent-21">
                                                                                            <td>5.2. Thuế GTGT được khấu trừ</td>
                                                                                            <td class="text-right">228,421,386</td>
                                                                                            <td class="text-right">473,934,127</td>
                                                                                            <td class="text-right">454,550,619</td>
                                                                                            <td class="text-right">362,376,352</td>
                                                                                            <td class="text-right">293,711,460</td>
                                                                                            <td class="text-right">293,227,952</td>
                                                                                            <td class="text-right">318,643,302</td>
                                                                                            <td class="text-right">305,646,255</td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-24 treegrid-parent-21">
                                                                                            <td>5.3. Thuế và khoản phải thu NN</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">455,027</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">222,188</td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-25 treegrid-parent-21">
                                                                                            <td>5.4. Giao dịch mua bán lại TPCP</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr class="treegrid-26 treegrid-parent-21">
                                                                                            <td>5.5. Tài sản ngắn hạn khác</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                            <div class="tab-pane" id="bctc-tab-2">
                                                                                <div class="table-responsive">
                                                                                    <table class="table table-xs useHover-table table-dark fs-12 table-bordered table-hover">
                                                                                        <thead>
                                                                                        <tr>
                                                                                            <th class="text-muted "></th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q1">Q1/2019</th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q4">Q4/2018</th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q3">Q3/2018</th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q2">Q2/2018</th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q1">Q1/2018</th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q4">Q4/2017</th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q3">Q3/2017</th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q2">Q2/2017</th>
                                                                                        </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                        <tr>
                                                                                            <td>1. Doanh thu bán hàng và cung cấp dịch vụ</td>
                                                                                            <td class="text-right"><strong>4,249,357,249</strong></td>
                                                                                            <td class="text-right"><strong>7,823,910,821</strong></td>
                                                                                            <td class="text-right"><strong>8,123,852,901</strong></td>
                                                                                            <td class="text-right"><strong>8,301,624,601</strong></td>
                                                                                            <td class="text-right"><strong>4,311,468,975</strong></td>
                                                                                            <td class="text-right"><strong>8,968,175,174</strong></td>
                                                                                            <td class="text-right"><strong>7,640,854,721</strong></td>
                                                                                            <td class="text-right"><strong>6,183,122,828</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>2. Các khoản giảm trừ doanh thu</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>3. Doanh thu thuần về BH và cung cấp dịch vụ</td>
                                                                                            <td class="text-right"><strong>4,249,357,249</strong></td>
                                                                                            <td class="text-right"><strong>7,823,910,821</strong></td>
                                                                                            <td class="text-right"><strong>8,123,852,901</strong></td>
                                                                                            <td class="text-right"><strong>8,301,624,601</strong></td>
                                                                                            <td class="text-right"><strong>4,311,468,975</strong></td>
                                                                                            <td class="text-right"><strong>8,968,175,174</strong></td>
                                                                                            <td class="text-right"><strong>7,640,854,721</strong></td>
                                                                                            <td class="text-right"><strong>6,183,122,828</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="text-success"><span class="pl-3">- Tăng trưởng (YoY)</span></td>
                                                                                            <td class="text-right text-danger"><strong>-1%</strong></td>
                                                                                            <td class="text-right text-danger"><strong>-13%</strong></td>
                                                                                            <td class="text-right text-success"><strong>6%</strong></td>
                                                                                            <td class="text-right text-success"><strong>34%</strong></td>
                                                                                            <td class="text-right text-danger"><strong>-1%</strong></td>
                                                                                            <td class="text-right text-success"><strong>22%</strong></td>
                                                                                            <td class="text-right text-success"><strong>44%</strong></td>
                                                                                            <td class="text-right text-success"><strong>24%</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>4. Giá vốn hàng bán</td>
                                                                                            <td class="text-right"><strong>3,976,069,360</strong></td>
                                                                                            <td class="text-right"><strong>7,415,063,467</strong></td>
                                                                                            <td class="text-right"><strong>7,549,309,371</strong></td>
                                                                                            <td class="text-right"><strong>7,737,681,297</strong></td>
                                                                                            <td class="text-right"><strong>4,025,790,890</strong></td>
                                                                                            <td class="text-right"><strong>8,398,959,699</strong></td>
                                                                                            <td class="text-right"><strong>7,072,761,165</strong></td>
                                                                                            <td class="text-right"><strong>5,686,048,933</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>5. Lợi nhuận gộp về BH và cung cấp dịch vụ</td>
                                                                                            <td class="text-right"><strong>273,287,889</strong></td>
                                                                                            <td class="text-right"><strong>408,847,355</strong></td>
                                                                                            <td class="text-right"><strong>574,543,530</strong></td>
                                                                                            <td class="text-right"><strong>563,943,304</strong></td>
                                                                                            <td class="text-right"><strong>285,678,085</strong></td>
                                                                                            <td class="text-right"><strong>569,215,475</strong></td>
                                                                                            <td class="text-right"><strong>568,093,557</strong></td>
                                                                                            <td class="text-right"><strong>497,073,895</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="text-success"><span class="pl-3">- BLN gộp</span></td>
                                                                                            <td class="text-right text-success"><strong>6%</strong></td>
                                                                                            <td class="text-right text-success"><strong>5%</strong></td>
                                                                                            <td class="text-right text-success"><strong>7%</strong></td>
                                                                                            <td class="text-right text-success"><strong>7%</strong></td>
                                                                                            <td class="text-right text-success"><strong>7%</strong></td>
                                                                                            <td class="text-right text-success"><strong>6%</strong></td>
                                                                                            <td class="text-right text-success"><strong>7%</strong></td>
                                                                                            <td class="text-right text-success"><strong>8%</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>6. Doanh thu hoạt động tài chính</td>
                                                                                            <td class="text-right"><strong>72,718,791</strong></td>
                                                                                            <td class="text-right"><strong>78,022,708</strong></td>
                                                                                            <td class="text-right"><strong>79,079,565</strong></td>
                                                                                            <td class="text-right"><strong>79,965,191</strong></td>
                                                                                            <td class="text-right"><strong>84,028,960</strong></td>
                                                                                            <td class="text-right"><strong>88,255,922</strong></td>
                                                                                            <td class="text-right"><strong>86,391,224</strong></td>
                                                                                            <td class="text-right"><strong>85,216,540</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>7. Chi phí tài chính</td>
                                                                                            <td class="text-right"><strong>654</strong></td>
                                                                                            <td class="text-right"><strong>210,345</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>43,355</strong></td>
                                                                                            <td class="text-right"><strong>2,808</strong></td>
                                                                                            <td class="text-right"><strong>14,037</strong></td>
                                                                                            <td class="text-right"><strong>11,461</strong></td>
                                                                                            <td class="text-right"><strong>19,930</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td><span class="pl-3"></span>- Trong đó: Chi phí lãi vay</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>8. Phần lãi hoặc lỗ công ty liên doanh, liên kết</td>
                                                                                            <td class="text-right"><strong>751,762</strong></td>
                                                                                            <td class="text-right"><strong>25,835,646</strong></td>
                                                                                            <td class="text-right"><strong>7,294,231</strong></td>
                                                                                            <td class="text-right"><strong>1,330,129</strong></td>
                                                                                            <td class="text-right"><strong>63,158,200</strong></td>
                                                                                            <td class="text-right"><strong>19,680,747</strong></td>
                                                                                            <td class="text-right"><strong>7,166,664</strong></td>
                                                                                            <td class="text-right"><strong>591,043</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>9. Chi phí bán hàng</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>10. Chi phí quản lý doanh nghiệp</td>
                                                                                            <td class="text-right"><strong>127,273,935</strong></td>
                                                                                            <td class="text-right"><strong>120,274,026</strong></td>
                                                                                            <td class="text-right"><strong>124,581,288</strong></td>
                                                                                            <td class="text-right"><strong>124,842,711</strong></td>
                                                                                            <td class="text-right"><strong>135,519,188</strong></td>
                                                                                            <td class="text-right"><strong>123,048,344</strong></td>
                                                                                            <td class="text-right"><strong>87,103,920</strong></td>
                                                                                            <td class="text-right"><strong>89,710,181</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>11. Lợi nhuận thuần từ hoạt động kinh doanh</td>
                                                                                            <td class="text-right"><strong>219,483,852</strong></td>
                                                                                            <td class="text-right"><strong>392,221,337</strong></td>
                                                                                            <td class="text-right"><strong>536,336,038</strong></td>
                                                                                            <td class="text-right"><strong>520,352,558</strong></td>
                                                                                            <td class="text-right"><strong>297,343,248</strong></td>
                                                                                            <td class="text-right"><strong>554,089,763</strong></td>
                                                                                            <td class="text-right"><strong>574,536,064</strong></td>
                                                                                            <td class="text-right"><strong>493,151,368</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>12. Thu nhập khác</td>
                                                                                            <td class="text-right"><strong>18,962,321</strong></td>
                                                                                            <td class="text-right"><strong>7,488,396</strong></td>
                                                                                            <td class="text-right"><strong>64,670,120</strong></td>
                                                                                            <td class="text-right"><strong>17,824,790</strong></td>
                                                                                            <td class="text-right"><strong>51,203,478</strong></td>
                                                                                            <td class="text-right"><strong>18,011,404</strong></td>
                                                                                            <td class="text-right"><strong>23,591,186</strong></td>
                                                                                            <td class="text-right"><strong>25,794,344</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>13. Chi phí khác</td>
                                                                                            <td class="text-right"><strong>1,713,857</strong></td>
                                                                                            <td class="text-right"><strong>1,590,308</strong></td>
                                                                                            <td class="text-right"><strong>8,770,504</strong></td>
                                                                                            <td class="text-right"><strong>3,336,357</strong></td>
                                                                                            <td class="text-right"><strong>768,511</strong></td>
                                                                                            <td class="text-right"><strong>826,399</strong></td>
                                                                                            <td class="text-right"><strong>1,147,430</strong></td>
                                                                                            <td class="text-right"><strong>1,769,397</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>14. Lợi nhuận khác</td>
                                                                                            <td class="text-right"><strong>17,248,465</strong></td>
                                                                                            <td class="text-right"><strong>5,898,088</strong></td>
                                                                                            <td class="text-right"><strong>55,899,616</strong></td>
                                                                                            <td class="text-right"><strong>14,488,433</strong></td>
                                                                                            <td class="text-right"><strong>50,434,967</strong></td>
                                                                                            <td class="text-right"><strong>17,185,005</strong></td>
                                                                                            <td class="text-right"><strong>22,443,756</strong></td>
                                                                                            <td class="text-right"><strong>24,024,947</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>15. Tổng lợi nhuận kế toán trước thuế</td>
                                                                                            <td class="text-right"><strong>236,732,317</strong></td>
                                                                                            <td class="text-right"><strong>398,119,425</strong></td>
                                                                                            <td class="text-right"><strong>592,235,653</strong></td>
                                                                                            <td class="text-right"><strong>534,840,992</strong></td>
                                                                                            <td class="text-right"><strong>347,778,215</strong></td>
                                                                                            <td class="text-right"><strong>571,274,768</strong></td>
                                                                                            <td class="text-right"><strong>596,979,820</strong></td>
                                                                                            <td class="text-right"><strong>517,176,314</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>16. Chi phí thuế TNDN hiện hành</td>
                                                                                            <td class="text-right"><strong>46,717,464</strong></td>
                                                                                            <td class="text-right"><strong>78,485,336</strong></td>
                                                                                            <td class="text-right"><strong>119,812,443</strong></td>
                                                                                            <td class="text-right"><strong>107,231,611</strong></td>
                                                                                            <td class="text-right"><strong>56,576,420</strong></td>
                                                                                            <td class="text-right"><strong>110,387,442</strong></td>
                                                                                            <td class="text-right"><strong>118,540,479</strong></td>
                                                                                            <td class="text-right"><strong>102,414,757</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>17. Chi phí thuế TNDN hoãn lại</td>
                                                                                            <td class="text-right"><strong>1,212,627</strong></td>
                                                                                            <td class="text-right"><strong>833,236</strong></td>
                                                                                            <td class="text-right"><strong>-1,012,057</strong></td>
                                                                                            <td class="text-right"><strong>-301,957</strong></td>
                                                                                            <td class="text-right"><strong>941,705</strong></td>
                                                                                            <td class="text-right"><strong>-1,239,835</strong></td>
                                                                                            <td class="text-right"><strong>934,637</strong></td>
                                                                                            <td class="text-right"><strong>2,362,729</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>18. Lợi nhuận sau thuế thu nhập doanh nghiệp</td>
                                                                                            <td class="text-right"><strong>188,802,226</strong></td>
                                                                                            <td class="text-right"><strong>318,800,853</strong></td>
                                                                                            <td class="text-right"><strong>473,435,268</strong></td>
                                                                                            <td class="text-right"><strong>427,911,338</strong></td>
                                                                                            <td class="text-right"><strong>290,260,090</strong></td>
                                                                                            <td class="text-right"><strong>462,127,161</strong></td>
                                                                                            <td class="text-right"><strong>477,504,704</strong></td>
                                                                                            <td class="text-right"><strong>412,398,829</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td><span class="pl-3"></span>18.1 Lợi ích của cổ đông thiểu số</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td><span class="pl-3"></span>18.2 Lợi nhuận sau thuế của công ty mẹ</td>
                                                                                            <td class="text-right"><strong>188,802,226</strong></td>
                                                                                            <td class="text-right"><strong>318,800,853</strong></td>
                                                                                            <td class="text-right"><strong>473,435,268</strong></td>
                                                                                            <td class="text-right"><strong>427,911,338</strong></td>
                                                                                            <td class="text-right"><strong>290,260,090</strong></td>
                                                                                            <td class="text-right"><strong>462,127,161</strong></td>
                                                                                            <td class="text-right"><strong>477,504,704</strong></td>
                                                                                            <td class="text-right"><strong>412,398,829</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="text-success"><span class="pl-3">- Tăng trưởng (YoY)</span></td>
                                                                                            <td class="text-right text-danger"><strong>-35%</strong></td>
                                                                                            <td class="text-right text-danger"><strong>-31%</strong></td>
                                                                                            <td class="text-right text-danger"><strong>-1%</strong></td>
                                                                                            <td class="text-right text-success"><strong>4%</strong></td>
                                                                                            <td class="text-right text-danger"><strong>-3%</strong></td>
                                                                                            <td class="text-right text-success"><strong>1%</strong></td>
                                                                                            <td class="text-right text-success"><strong>30%</strong></td>
                                                                                            <td class="text-right text-success"><strong>16%</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="text-success"><span class="pl-3">- BLN ròng</span></td>
                                                                                            <td class="text-right text-success"><strong>4%</strong></td>
                                                                                            <td class="text-right text-success"><strong>4%</strong></td>
                                                                                            <td class="text-right text-success"><strong>6%</strong></td>
                                                                                            <td class="text-right text-success"><strong>5%</strong></td>
                                                                                            <td class="text-right text-success"><strong>7%</strong></td>
                                                                                            <td class="text-right text-success"><strong>5%</strong></td>
                                                                                            <td class="text-right text-success"><strong>6%</strong></td>
                                                                                            <td class="text-right text-success"><strong>7%</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>19. Lãi cơ bản trên cổ phiếu</td>
                                                                                            <td class="text-right"><strong>2</strong></td>
                                                                                            <td class="text-right"><strong>4</strong></td>
                                                                                            <td class="text-right"><strong>6</strong></td>
                                                                                            <td class="text-right"><strong>5</strong></td>
                                                                                            <td class="text-right"><strong>4</strong></td>
                                                                                            <td class="text-right"><strong>6</strong></td>
                                                                                            <td class="text-right"><strong>6</strong></td>
                                                                                            <td class="text-right"><strong>5</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>20. Lãi suy giảm trên cổ phiếu</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>21. Cổ tức</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                            <div class="tab-pane" id="bctc-tab-3">
                                                                                <div class="table-responsive">
                                                                                    <table class="table table-xs useHover-table table-dark fs-12 table-bordered table-hover controller">
                                                                                        <thead>
                                                                                        <tr>
                                                                                            <th class="text-muted "></th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q1">Q1/2019</th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q4">Q4/2018</th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q3">Q3/2018</th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q2">Q2/2018</th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q1">Q1/2018</th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q4">Q4/2017</th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q3">Q3/2017</th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q2">Q2/2017</th>
                                                                                        </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                        <tr>
                                                                                            <td class="bg-light">I. LƯU CHUYỂN TIỀN TỪ HĐKD</td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Lợi nhuận (lỗ) trước thuế</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>892,487,951</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Điều chỉnh cho các khoản:</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Khấu hao tài sản cố định</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">35,253,556</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Các khoản dự phòng</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-12,098,476</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Lãi, lỗ từ đầu tư vào công ty liên kết</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>(Lãi) lỗ chênh lệch tỷ giáchưa thực hiện</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>(Lãi)/lỗ từ hoạt động đầu tư/thanh lý TSCĐ</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-155,548,142</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Chi phí lãi vay</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Các khoản giảm trừ khác</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Thu nhập từ lãi tiền gửi</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Phân bổ lợi thế thương mại</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Lãi lỗ thanh lý tài sản cố định</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>LN (lỗ) từ HĐKD trước thay đổi VLĐ</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>760,094,889</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>(Tăng) giảm các khoản phải thu</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-137,087,808</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tăng, giảm chứng khoán tự doanh</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>(Tăng) giảm hàng tồn kho</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-281,912,077</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>(Tăng) giảm phải trả</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">425,744,252</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>(Tăng) giảm chi phí trả trước</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">12,763,366</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền lãi vay đã trả</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Thuế thu nhập doanh nghiệp đã nộp</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-191,124,150</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền thu khác từ hoạt động kinh doanh</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền chi khác cho hoạt động kinh doanh</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-2,971,856</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tăng tài sản ngắn hạn khác</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Chênh lệch tỷ giá trong giai đoạn đầu tư</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Lưu chuyển tiền thuần từ HĐKD</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>585,506,615</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="bg-light">II. LƯU CHUYỂN TIỀN TỪ HĐ ĐT</td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền chi để mua sắm, xây dựng TSCĐ</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-85,185,161</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền thu do thanh lý TSCĐ và TSDH khác</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">2,675,434</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền chi cho vay, mua các CC nợ của ĐV</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-790,900,000</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền thu cho vay, bán lại CC nợ của ĐV</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền chi đầu tư góp vốn vào đơn vị khác</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền thu do bán các khoản ĐTGV vào ĐV khác</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền thu lãi cho vay, cổ tức và LN được chia</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">78,209,359</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền đầu tư xây dựng nhà xưởng</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tăng lợi ích của CĐTS khi hợp nhất Cty con</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Loại trừ lợi ích của CĐTS khi thanh lý Cty con</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền mặt tại công ty con mua trong năm</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền thu do bán các khoản ĐT vào Cty con</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền chi gửi ngắn hạn</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền thu lãi từ gửi ngắn hạn</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền chi mua tài sản khác</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Giảm tiền gửi ngân hàng có kỳ hạn</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền chi để mua thêm CP của công ty con</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền thu từ các khoản ký gửi, ký quỹ dài hạn</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền gửi ngắn hạn</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Rút tiền gửi ngắn hạn</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền thu từ chuyển quyền góp vốn vào DÁ</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Lưu chuyển tiền thuần từ hoạt động đầu tư</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-795,200,367</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="bg-light">III. LƯU CHUYỂN TIỀN TỪ HĐ TÀI CHÍNH</td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền thu từ PHCP, nhận góp vốn của CSH</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền chi trả vốn góp cho các CSH, mua CP quỹ</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền thu từ nhận góp vốn liên doanh</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền vay ngắn hạn, dài hạn nhận được</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền chi trả nợ gốc vay</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền chi trả nợ thuê tài chính</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền chi cho đầu tư ngắn hạn</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Cổ tức, lợi nhuận đã trả cho chủ sở hữu</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-161,343</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Cổ tức, lợi nhuận đã trả cho cổ đông thiểu số</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Nhận vốn góp của cổ đông thiểu số</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Chi khác từ lợi nhuận chưa phân phối</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền thu từ lãi tiền gửi</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Lưu chuyển tiền thuần từ/(sử dụng vào) HĐTC</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-161,343</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Lưu chuyển tiền thuần trong năm</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-209,855,095</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền và tương đương tiền đầu năm</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>1,996,627,577</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Ảnh hưởng của thay đổi tỷ giá quy đổi ngoại tệ</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Chênh lệch tỷ giá chuyển đối báo cáo tài chính</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền và tương đương tiền cuối năm</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>1,786,772,483</strong></td>
                                                                                        </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                            <div class="tab-pane" id="bctc-tab-4">
                                                                                <div class="table-responsive">
                                                                                    <table class="table table-xs useHover-table table-dark fs-12 table-bordered table-hover controller" id="table_lctt_tt">
                                                                                        <thead>
                                                                                        <tr>
                                                                                            <th class="text-muted "></th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q1">Q1/2019</th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q4">Q4/2018</th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q3">Q3/2018</th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q2">Q2/2018</th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q1">Q1/2018</th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q4">Q4/2017</th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q3">Q3/2017</th>
                                                                                            <th class="useHover-th text-muted text-right" data-col-hover="Q2">Q2/2017</th>
                                                                                        </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                        <tr>
                                                                                            <td class="bg-light">I. Lưu chuyển tiền từ HĐKD</td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>1. Tiền thu từ BH, CC DV &amp; và DT khác</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>2. Tiền chi trả cho người CC HH &amp;DV</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>3. Tiền chi trả cho người lao động</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>4. Tiền chi trả lãi vay</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>5. Tiền chi nộp thuế TNDN</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>6. Tiền thu khác từ HĐKD</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>7. Tiền chi khác cho HĐKD</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Lưu chuyển tiền thuần từ HĐKD</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="bg-light">II. LƯU CHUYỂN TIỀN TỪ HĐ ĐẦU TƯ</td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền chi để mua sắm, XD TSCĐ</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền thu do thanh lý TSCĐ và TSDH khác</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền chi cho vay, mua các CC nợ</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền thu hồi cho vay, bán CC nợ</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền chi ĐT góp vốn vào đơn vị khác</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền thu do bán các khoản ĐT góp vốn</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền thu lãi cho vay, cổ tức và LN được chia</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền đầu tư xây dựng nhà xưởng</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>8. Tăng lợi ích của CĐ thiếu số </td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>9. Loại trừ lợi ích của CĐ thiểu số</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>11. Tiền mặt tại công ty con mua trong năm</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>12. Tiền thu do bán các khoản ĐT vào CTy con</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>13. Tiền chi gửi ngắn hạn</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>14. Tiền thu lãi từ gửi ngắn hạn</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>15. Tiền chi mua tài sản khác</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>17. Giảm tiền gửi ngân hàng có kỳ hạn</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>16. Tiền chi để mua thêm cổ phần của Cty con</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>18. Tiền thu từ các khoản ký gửi, ký quỹ DH</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>19. Tiền gửi ngắn hạn</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>20. Rút tiền gửi ngắn hạn</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>21. Tiền thu từ chuyển quyền góp vốn vào DA</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Lưu chuyển tiền thuần từ hoạt động đầu tư</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="bg-light">III. LƯU CHUYỂN TIỀN TỪ HĐ TÀI CHÍNH</td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                            <td class="bg-light text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền thu từ PH CP, nhận góp vốn của CSH</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền chi trả vốn góp cho các CSH, mua lại CPQ</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền thu từ nhận góp vốn liên doanh</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền vay ngắn hạn, dài hạn nhận được</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền chi trả nợ gốc vay</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền chi trả nợ thuê tài chính</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền chi cho đầu tư ngắn hạn</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Cổ tức, lợi nhuận đã trả cho CSH</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Cổ tức, lợi nhuận đã trả cho CĐ thiểu số</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Nhận vốn góp của CĐ thiểu số</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Chi khác từ lợi nhuận chưa phân phối</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền thu từ lãi tiền gửi</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                            <td class="text-right">-</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Lưu chuyển tiền thuần từ/(sử dụng vào) HĐTC</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Lưu chuyển tiền thuần trong năm</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền và tương đương tiền đầu năm</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Ảnh hưởng của thay đổi tỷ giá quy đổi ngoại tệ</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Chênh lệch tỷ giá chuyển đối báo cáo tài chính</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tiền và tương đương tiền cuối năm</td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                            <td class="text-right"><strong>-</strong></td>
                                                                                        </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                            <div class="tab-pane" id="bctc-tab-5">
                                                                                <div class="px-2 py-0">
                                                                                    <div class="veq-document row border border-light">
                                                                                        <div class="col-lg-3 col-sm-4 col-xs-12 left border-0 px-3">
                                                                                            <div class="label-layout inline-block font-bold mb-2">Kỳ báo cáo</div>
                                                                                            <div class="select-options inline-block mb-2">
                                                                                                <select class="form-control form-control-sm">
                                                                                                    <option value="3">3 năm</option>
                                                                                                    <option value="5">5 năm</option>
                                                                                                    <option value="10">10 năm</option>
                                                                                                    <option value="0">Tất cả</option>
                                                                                                </select>
                                                                                            </div>
                                                                                            <div class="label-layout font-bold mb-2">Loại tài liệu</div>
                                                                                            <ul class="list-dau-muc list-unstyled">
                                                                                                <li class="active"> <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i><span>Tất cả</span></a> </li>
                                                                                                <li class=""> <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i><span>Báo cáo tài chính</span></a> </li>
                                                                                                <li> <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i><span>Nghị quyết</span></a> </li>
                                                                                                <li> <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i><span>Báo cáo thường niên</span></a> </li>
                                                                                                <li> <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i><span>Bản cáo bạch</span></a> </li>
                                                                                                <li> <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i><span>Báo cáo quản trị</span></a> </li>
                                                                                                <li> <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i><span>Báo cáo phân tích</span></a> </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div id="DocLinks" class="col-lg-9 col-sm-8 col-xs-12 left content pr-3">
                                                                                            <div id="Year2019" class="item  active"><time class="date-year">Năm 2019</time>
                                                                                                <ul class="list-dau-muc list-unstyled">
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Nghị quyết Hội đồng Quản trị</span>
                                                                                                            <span class="doc-time">(12/03/2019)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Nghị quyết Đại hội cổ đông thường niên</span>
                                                                                                            <span class="doc-time">(17/04/2019)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tình hình quản trị công ty</span>
                                                                                                            <span class="doc-time">(30/01/2019)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tình hình quản trị công ty</span>
                                                                                                            <span class="doc-time">(30/07/2019)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 3 năm 2019</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 3 năm 2019</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 2 năm 2019</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 2 năm 2019</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 1 năm 2019</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 1 năm 2019</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                </ul>
                                                                                            </div>
                                                                                            <div id="Year2018" class="item "><time class="date-year">Năm 2018</time>
                                                                                                <ul class="list-dau-muc list-unstyled">
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất năm 2018 (đã kiểm toán)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ năm 2018 (đã kiểm toán)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Nghị quyết Đại hội cổ đông thường niên</span>
                                                                                                            <span class="doc-time">(31/03/2018)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Nghị quyết Hội đồng Quản trị</span>
                                                                                                            <span class="doc-time">(30/11/2018)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tình hình quản trị công ty</span>
                                                                                                            <span class="doc-time">(30/01/2018)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tình hình quản trị công ty</span>
                                                                                                            <span class="doc-time">(30/07/2018)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 4 năm 2018</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 4 năm 2018</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 3 năm 2018 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 3 năm 2018 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 2 năm 2018</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 2 năm 2018</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 2 năm 2018 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 2 năm 2018 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 1 năm 2018 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 1 năm 2018 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                </ul>
                                                                                            </div>
                                                                                            <div id="Year2017" class="item "><time class="date-year">Năm 2017</time>
                                                                                                <ul class="list-dau-muc list-unstyled">
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ năm 2017 (đã kiểm toán)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất năm 2017 (đã kiểm toán)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Nghị quyết Đại hội cổ đông thường niên</span>
                                                                                                            <span class="doc-time">(15/04/2017)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Nghị quyết Hội đồng Quản trị</span>
                                                                                                            <span class="doc-time">(24/07/2017)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tình hình quản trị công ty</span>
                                                                                                            <span class="doc-time">(25/01/2017)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tình hình quản trị công ty</span>
                                                                                                            <span class="doc-time">(31/07/2017)</span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 4 năm 2017</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 4 năm 2017</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 3 năm 2017 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 3 năm 2017 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 2 năm 2017</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 2 năm 2017</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 2 năm 2017 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 2 năm 2017 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 1 năm 2017</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 1 năm 2017</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính hợp nhất quý 1 năm 2017 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                    <li>
                                                                                                        <a class="text-muted text-hover-info text-hover-underline" href="#">
                                                                                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                                            <span>Báo cáo tài chính công ty mẹ quý 1 năm 2017 (đã soát xét)</span>
                                                                                                            <span class="doc-time"></span>
                                                                                                        </a>
                                                                                                        <i class="fa fa-download icon-download float-right text-hover-info text-muted cursor-pointer" aria-hidden="true" url="" filename=""></i></li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </>
        )
    }
}
export default DetailsCharts;
