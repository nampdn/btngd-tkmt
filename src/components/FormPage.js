import React from "react";
import ReactDateInputs from "react-date-inputs";

export default function FormPage() {
  return (
    <div className="gap-4 h-auto p-4 md:p-8 min-w-full max-w-md mx-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg font-bold uppercase">
          Phiếu Đăng Ký Thánh Kinh Mùa Thu 2020
        </h1>
        <div>
          <div className="bg-gray-700 mt-8 p-4 text-white rounded">
            <h2 className="text-lg font-semibold">
              <em>Quy Định</em>
            </h2>
            <ul className="mt-4 text-lg">
              <li className="mt-2">
                * Nhận đăng ký và hoàn tất lệ phí: 26/07/2020 - 13/09/2020
              </li>
              <li className="mt-2">
                * Nhận đăng ký và đặt cọc: 26/07/2020 - 06/09/2020
              </li>
              <li className="mt-2">
                * Hoàn trả lệ phí nếu hủy đăng ký: Hết ngày 23/09/2020 (Sau thời
                điểm này nếu hủy đăng ký sẽ không được hoàn cọc)
              </li>
              <li>
                * Đối tượng được đóng lệ phí theo mức đóng hỗ trợ: Thành viên có
                thời gian sinh hoạt tại BTN Gia Định trên 3 tháng.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <span>
              Để thuận tiện cho công tác tổ chức, vui lòng điền đầy đủ các thông
              tin sau
            </span>
            <hr className="mt-8 bg-gray-700" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <h3 className="text-lg font-semibold">Thông tin cá nhân</h3>
            <span className="text-gray-500 text-opacity-75">
              Bao gồm các thông tin cơ bản về bạn để BTC đăng ký thủ tục xe,
              khách sạn, chia phòng...
            </span>
          </div>
          <div className="">
            <div className="flex flex-col">
              <label className="text-lg">Họ và tên</label>
              <input
                className="h-16 rounded text-2xl p-4 mt-2"
                type="text"
                name="fullName"
                placeholder="Nguyễn Văn A"
              />
            </div>
            <div className="flex flex-col mt-8">
              <label className="text-lg">Số CMND</label>
              <input
                className="h-16 rounded text-2xl p-4 mt-2"
                type="text"
                name="nationid"
                placeholder="261506123"
              />
            </div>
            <div className="flex flex-col mt-8">
              <label className="text-lg">Số điện thoại</label>
              <input
                className="h-16 rounded text-2xl p-4 mt-2"
                type="text"
                name="phoneNumber"
                placeholder="0913173626"
              />
            </div>
            <div className="flex flex-col mt-8">
              <label className="text-lg">Ngày sinh</label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                <input
                  className="h-16 rounded text-2xl p-4 mt-2"
                  type="text"
                  name="phoneNumber"
                  placeholder="01"
                />
                <input
                  className="h-16 rounded text-2xl p-4 mt-2"
                  type="text"
                  name="phoneNumber"
                  placeholder="04"
                />
                <input
                  className="h-16 rounded text-2xl p-4 mt-2"
                  type="text"
                  name="phoneNumber"
                  placeholder="1996"
                />
              </div>
            </div>
            <div className="flex flex-col mt-8">
              <label className="text-lg">Size áo</label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {["S", "M", "L", "XL", "XXL", "Khác"].map((size) => (
                  <span className="bg-gray-600 rounded p-2 text-white">
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-8 bg-gray-700" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <h3 className="text-lg font-semibold">Thông tin nhóm lại</h3>
            <span className="text-gray-500 text-opacity-75">
              Nhóm nhỏ, thời gian bạn sinh hoạt tại Ban thanh niên Gia Định
            </span>
          </div>
          <div className="">
            <div className="flex flex-col">
              <label className="text-lg">Nhóm nhỏ</label>
              <div className="grid grid-cols-5 gap-2 mt-2">
                {Array.apply(null, { length: 15 })
                  .map(Number.call, Number)
                  .map((i) => (
                    <span className="bg-gray-600 rounded p-2 text-white">
                      {i + 1}
                    </span>
                  ))}
              </div>
            </div>
            <div className="flex flex-col mt-8">
              <label className="text-lg">Thời gian nhóm lại</label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {["Dưới 3 tháng", "Trên 3 tháng"].map((size) => (
                  <span className="bg-gray-600 rounded p-2 text-white">
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-8 bg-gray-700" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <h3 className="text-lg font-semibold">Lệ Phí</h3>
            <span className="text-gray-500 text-opacity-75">
              Thông tin đóng cọc, cách đóng lệ phí
            </span>
          </div>
          <div className="">
            <div className="flex flex-col">
              <label className="text-lg">Mức lệ phí</label>
              <div className="grid grid-cols-1 gap-2 mt-2">
                {[
                  "Tiền cọc: 400.000đ",
                  "Sinh viên, thu nhập dưới 3 triệu: 700.000đ",
                  "Thu nhập 3-5 triệu: 950.000đ",
                  "Thu nhập trên 5-7 triệu: 1.150.000đ",
                  "Thu nhập trên 7 triệu: 1.350.000đ",
                ].map((text) => (
                  <span className="bg-gray-600 rounded p-2 text-white">
                    {text}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col mt-8">
              <label className="text-lg">Dâng hiến:</label>
              <input
                className="h-16 rounded text-2xl p-4 mt-2"
                type="text"
                name="phoneNumber"
                placeholder="Nhập số tiền dâng..."
              />
            </div>
            <div className="flex flex-col mt-8">
              <label className="text-lg">Thời gian nhóm lại</label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {["Dưới 3 tháng", "Trên 3 tháng"].map((size) => (
                  <span className="bg-gray-600 rounded p-2 text-white">
                    {size}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col mt-8">
              <label className="text-lg">Hình thức nộp lệ phí</label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {[
                  "Nộp trực tiếp cho Ban Tổ Chức",
                  "Nộp cho nhóm trưởng (tiền mặt)",
                ].map((size) => (
                  <span className="bg-gray-600 rounded p-2 text-white">
                    {size}
                  </span>
                ))}
              </div>
              <span className="text-gray-500 text-opacity-75">
                Chi tiết về việc đăng ký liên hệ Thủ quỹ Ban Thanh Niên: Như
                Ngọc 0902457367
              </span>
            </div>
          </div>
        </div>
        <hr className="mt-8 bg-gray-700" />
      </div>
    </div>
  );
}
