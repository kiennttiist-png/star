import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import anh1 from './assets/anh1.jpg';
import anh2 from './assets/anh2.jpg';
import anh3 from './assets/anh3.jpg';
import anh4 from './assets/anh4.jpg';

const App: React.FC = () => {
  const imageUrls = [anh1, anh2, anh3, anh4];
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    setComments([
      'Ủa tưởng celeb.',
      'Bao giờ fan meeting vậy chủ?',
      'Story có lịch phát sóng không?',
      'Độ nổi tiếng thế này chắc phải có fanclub rồi.',
      'Phóng viên nài gì mà tìm được tin như vầy 🤔',
      'Xin xỗ để làm fan vì sự.',
      'Các nhà báo dành dụm công sức quá.',
      'Đặc biệt là phần góc Fact Check, chính xác 100%.',
      'Mình cung cấp thêm bằng chứng được không?',
      'Breaking news quá đi, phải lên truyền hình ngay.',
    ]);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  const timelineEvents = [
    { time: '08:15', event: 'Phóng viên phát hiện sự bất thường' },
    { time: '09:20', event: 'Thông báo cho tòa soạn' },
    { time: '09:45', event: 'Bắt đầu điều tra sâu' },
    { time: '11:30', event: 'Xác nhận tính xác thực' },
    { time: '14:00', event: 'Chuẩn bị bản tin đặc biệt' },
    { time: '16:45', event: 'Phỏng vấn độc quyền được tiến hành' },
    { time: '18:20', event: 'Công bố toàn bộ khám phá' },
  ];

  const investigationChecklist = [
    'Hay xuất hiện ở nơi đẹp',
    'Có ảnh đẹp',
    'Luôn nói mình bình thường',
    'Được tòa soạn chú ý',
    'Có tầm ảnh hưởng lớn',
    'Được cộng đồng mạng yêu thích',
  ];

  const fameIndices = [
    { label: 'Thần thái', percentage: 92 },
    { label: 'Khả năng lên hình', percentage: 88 },
    { label: 'Độ nổi tiếng', percentage: 95 },
    { label: 'Độ bí ẩn', percentage: 85 },
  ];

  const factChecks = [
    {
      claim: '...... là người nổi tiếng.',
      result: '✅ Nhưng rất giống.',
    },
    {
      claim: '...... xuất hiện trên mạng.',
      result: '✅ Được xác nhận.',
    },
    {
      claim: '...... có fan page với hàng ngàn theo dõi.',
      result: '❌ Hiện còn chỉ là dự báo.',
    },
  ];

  return (
    <div className="w-screen overflow-x-hidden bg-white">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-red-700 to-red-900 text-white px-6 py-12 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
        <div className="relative z-10 text-center">
          <div className="text-2xl md:text-4xl font-black tracking-widest mb-4 animate-pulse">NEWS 24H</div>
          <div className="text-3xl md:text-5xl font-bold tracking-wide mb-3">BẢN TIN ĐẶC BIỆT</div>
          <div className="text-lg md:text-xl font-light opacity-95">
            Cập nhật liên tục về nhân vật đang được cộng đồng mạng quan tâm.
          </div>
        </div>
      </header>

      {/* Breaking News */}
      <section className="w-full bg-red-700 text-white py-3 px-6 sticky top-0 z-50 overflow-hidden">
        <div className="flex items-center gap-3">
          <span className="font-black text-sm whitespace-nowrap animate-pulse">🔴 TIN NÓNG</span>
          <div className="flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap text-sm font-medium">
              🔴 Chính chủ vẫn chưa xác nhận mình là người nổi tiếng • 📸 Story mới vừa được phát hiện • 👀 Phóng viên vẫn đang theo dõi • ⭐ Độ nổi tiếng tiếp tục tăng • 💬 Cư dân mạng rôm rả bình luận • 🎥 Dự kiến xuất hiện trên sóng •
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-gray-100 to-white px-6 py-12 md:px-8">
        <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
          <Slider {...sliderSettings}>
            {imageUrls.map((image, index) => (
              <div key={index} className="h-64 md:h-96 lg:h-[500px]">
                <img src={image} alt={`Ảnh ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-700 mb-4">Người Nổi Tiếng Mới Được Phát Hiện</h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Sau kỳ điều tra kỹ lưỡng, tòa soạn NEWS 24H tự hào giới thiệu một khám phá có tiềm năng lớn.
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="w-full bg-gray-100 px-6 py-12 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider mb-8 relative pb-4 before:absolute before:bottom-0 before:left-0 before:w-16 before:h-1 before:bg-red-700">
          Hồ sơ nhân vật
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            { label: 'Tên', value: '......' },
            { label: 'Danh hiệu', value: 'Người nổi tiếng chưa được xác nhận' },
            { label: 'Tình trạng', value: 'Đang gây sốt' },
            { label: 'Đặc điểm nổi bật', value: 'Bí ẩn, hấp dẫn, đáng chú ý' },
            { label: 'Mức độ nổi tiếng', value: '⭐⭐⭐⭐⭐' },
            { label: 'Ngày phát hiện', value: '26/06/2026' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-700 hover:shadow-lg hover:translate-y-[-8px] transition-all cursor-pointer animate-fadeUp" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="text-xs md:text-sm font-black text-red-700 uppercase tracking-wider mb-2">{item.label}</div>
              <div className="text-lg md:text-xl font-bold text-gray-900">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Hot News */}
      <section className="w-full bg-white px-6 py-12 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider mb-8 relative pb-4 before:absolute before:bottom-0 before:left-0 before:w-16 before:h-1 before:bg-red-700">
          Tin nóng
        </h2>
        <article className="bg-white p-6 md:p-8 rounded-lg shadow-md border-t-4 border-red-700">
          <div className="text-xs md:text-sm font-black text-red-700 uppercase tracking-wider mb-3">26 tháng 6, 2026</div>
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">Theo nhiều nguồn tin chưa được kiểm chứng nhưng nghe rất đáng tin...</h3>
          <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
            <p>
              Sau những ngày điều tra không ngủ nghỉ, tòa soạn NEWS 24H vinh dự công bố: một nhân vật mới đang nhanh chóng chiếm lĩnh sư quan tâm của cộng đồng mạng. Những dấu hiệu không thể chối cãi cho thấy rằng ...... không phải là bất cứ ai.
            </p>
            <p>
              Cụ thể, qua quá trình theo dõi hành động, phân tích hình ảnh, và tham khảo ý kiến từ các chuyên gia ở trong ngành (những chuyên gia mà chúng tôi tự mời lên để phỏng vấn), chúng tôi đã rút ra kết luận: đây chính là dấu hiệu rõ ràng của một người sắp trở nên nổi tiếng.
            </p>
            <p>
              Thế nhưng, điều thú vị là bản thân nhân vật này vẫn chưa nhận ra tầm quan trọng của mình. Cũng có khả năng là chủ nhân của những bằng chứng chúng tôi tìm được không hề hay biết về sự khẩn trương này.
            </p>
          </div>
        </article>
      </section>

      {/* Interview */}
      <section className="w-full bg-gray-100 px-6 py-12 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider mb-8 relative pb-4 before:absolute before:bottom-0 before:left-0 before:w-16 before:h-1 before:bg-red-700">
          Phỏng vấn độc quyền
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-l-4 border-red-700">
            <blockquote className="text-xl md:text-2xl font-bold text-red-700 italic mb-4">
              "Không có gì đặc biệt đâu."
            </blockquote>
            <div className="text-xs md:text-sm text-gray-600 italic">— Lời của nhân vật khi được hỏi về sự nổi tiếng</div>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <div className="text-sm md:text-base font-black text-red-700 uppercase tracking-wider mb-4">📝 Bình luận của phóng viên:</div>
            <div className="space-y-3 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                Lời trả lời này chính là minh chứng hoàn hảo cho thuyết của chúng tôi. Một người thực sự bình thường sẽ không bao giờ nói "không có gì đặc biệt". Họ sẽ nói gì đó khác, hoặc thậm chí sẽ có phản ứng khác. Nhưng câu trả lời này — lạnh lùng, khiêm tốn, có phần thậm chí còn tỏ vẻ không quan tâm — đó chính là điểm cực kỳ đặc biệt mà chúng tôi đang nói tới.
              </p>
              <p>
                Đây gọi là "chuẩn mực của người nổi tiếng": càng tỏ vẻ bình thường, họ càng trở nên đặc biệt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fame Indices */}
      <section className="w-full bg-white px-6 py-12 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider mb-8 relative pb-4 before:absolute before:bottom-0 before:left-0 before:w-16 before:h-1 before:bg-red-700">
          Chỉ số nổi tiếng
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {fameIndices.map((item, idx) => (
            <div key={idx} className="animate-fadeUp" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="text-base md:text-lg font-black text-gray-900 mb-3">{item.label}</div>
              <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden shadow-inner">
                <div
                  className="bg-gradient-to-r from-red-700 to-red-400 h-full rounded-full transition-all duration-1500 ease-out flex items-center justify-end pr-2"
                  style={{ width: `${item.percentage}%` }}
                >
                  <span className="text-xs font-bold text-white">{item.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fact Check */}
      <section className="w-full bg-gray-100 px-6 py-12 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider mb-8 relative pb-4 before:absolute before:bottom-0 before:left-0 before:w-16 before:h-1 before:bg-red-700">
          Góc Fact Check
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {factChecks.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-gray-300 hover:border-red-700 hover:translate-y-[-5px] hover:shadow-lg transition-all animate-fadeUp" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="mb-4">
                <div className="text-xs font-black text-red-700 uppercase tracking-wider mb-2">Tin đồn:</div>
                <p className="text-base md:text-lg text-gray-700">"{item.claim}"</p>
              </div>
              <div>
                <div className="text-xs font-black text-red-700 uppercase tracking-wider mb-2">Kết quả:</div>
                <p className="text-lg md:text-xl font-bold text-gray-900">{item.result}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Investigation */}
      <section className="w-full bg-white px-6 py-12 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider mb-8 relative pb-4 before:absolute before:bottom-0 before:left-0 before:w-16 before:h-1 before:bg-red-700">
          Hồ sơ điều tra
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {investigationChecklist.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 md:p-5 bg-gray-100 rounded-lg border-l-4 border-red-700 hover:bg-gradient-to-r hover:from-gray-100 hover:to-red-50 hover:translate-x-2 transition-all cursor-pointer animate-fadeUp" style={{ animationDelay: `${idx * 0.1}s` }}>
              <span className="text-2xl font-black text-red-700">✔</span>
              <span className="text-base md:text-lg font-bold text-gray-900">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Science */}
      <section className="w-full bg-gray-100 px-6 py-12 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider mb-8 relative pb-4 before:absolute before:bottom-0 before:left-0 before:w-16 before:h-1 before:bg-red-700">
          Góc khoa học
        </h2>
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-l-4 border-red-700">
          <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            <p>
              Các nhà nghiên cứu đã cố gắng giải thích hiện tượng này bằng cách phân tích hành vi, ngoại hình, và mức độ tương tác với môi trường xung quanh. Qua những phương pháp khoa học hiện đại, họ kết luận rằng:
            </p>
          </div>
          <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 md:p-6 rounded-lg border-l-4 border-red-700">
            <p className="text-base md:text-lg font-bold text-gray-900">
              ...... có đủ những yếu tố để trở thành "người nổi tiếng", bao gồm nhưng không giới hạn ở: khả năng thu hút chú ý, sự xuất hiện thường xuyên tại những địa điểm có ảnh hưởng, và một yếu tố bí ẩn mà các nhà khoa học vẫn chưa tìm ra tên gọi chính thức cho nó. Tạm thời, họ gọi nó là "phần tử X".
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full bg-white px-6 py-12 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider mb-8 relative pb-4 before:absolute before:bottom-0 before:left-0 before:w-16 before:h-1 before:bg-red-700">
          Dòng thời gian
        </h2>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 md:w-0.5 bg-gray-300"></div>
          <div className="space-y-8 md:space-y-10">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className={`flex ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} animate-fadeUp`} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-6/12 md:w-5/12"></div>
                <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-5 h-5 bg-red-700 border-4 border-white rounded-full top-6"></div>
                <div className={`w-6/12 md:w-5/12 ${idx % 2 === 0 ? 'md:text-right md:pr-8' : 'pl-12 md:pl-0 md:pl-8'}`}>
                  <div className="text-sm md:text-base font-black text-red-700">{event.time}</div>
                  <div className="text-base md:text-lg text-gray-700">{event.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comments */}
      <section className="w-full bg-gray-100 px-6 py-12 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider mb-8 relative pb-4 before:absolute before:bottom-0 before:left-0 before:w-16 before:h-1 before:bg-red-700">
          Bình luận cư dân mạng
        </h2>
        <div className="space-y-4 md:space-y-5">
          {comments.map((comment, idx) => (
            <div key={idx} className="flex gap-3 md:gap-4 bg-white p-4 md:p-5 rounded-lg shadow-sm border-l-4 border-gray-300 hover:border-red-700 hover:shadow-md transition-all animate-fadeUp" style={{ animationDelay: `${idx * 0.05}s` }}>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-red-700 to-red-500 flex items-center justify-center text-white font-black flex-shrink-0">👤</div>
              <div className="flex-1">
                <div className="text-xs md:text-sm font-black text-gray-900 mb-1">Người dùng {idx + 1}</div>
                <div className="text-sm md:text-base text-gray-700 mb-2">{comment}</div>
                <div className="flex gap-4 text-xs md:text-sm font-bold text-red-700">
                  <span className="cursor-pointer hover:text-gray-900">👍 Thích</span>
                  <span className="cursor-pointer hover:text-gray-900">💬 Trả lời</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prediction */}
      <section className="w-full bg-white px-6 py-12 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider mb-8 relative pb-4 before:absolute before:bottom-0 before:left-0 before:w-16 before:h-1 before:bg-red-700">
          Dự báo tương lai
        </h2>
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-l-4 border-red-700">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Theo các chuyên gia không ai mời (nhưng rất sẵn sàng chia sẻ ý kiến của họ), tương lai của ...... là rực rỡ. Với tốc độ tăng trưởng hiện tại, có thể dự đoán:
          </p>
          <ul className="space-y-3 mb-6 text-base md:text-lg text-gray-700">
            <li className="pl-6 relative before:absolute before:left-0 before:content-['▶'] before:text-red-700 before:font-bold">
              Sau 1 tháng: Được nhắc đến bởi ít nhất 5 trang mạng khác.
            </li>
            <li className="pl-6 relative before:absolute before:left-0 before:content-['▶'] before:text-red-700 before:font-bold">
              Sau 3 tháng: Có khả năng xuất hiện trong các "top 10 nhân vật được chú ý".
            </li>
            <li className="pl-6 relative before:absolute before:left-0 before:content-['▶'] before:text-red-700 before:font-bold">
              Sau 6 tháng: Fan page chính thức lên đến 10K người theo dõi (theo dự báo lạc quan).
            </li>
            <li className="pl-6 relative before:absolute before:left-0 before:content-['▶'] before:text-red-700 before:font-bold">
              Sau 1 năm: Chắc chắn sẽ được các phương tiện truyền thông lớn hơn biết đến.
            </li>
          </ul>
          <p className="text-sm md:text-base text-red-700 italic">
            *Dự báo này có độ tin cậy là 47%, nhưng chúng tôi cá rằng sẽ cao hơn.*
          </p>
        </div>
      </section>

      {/* Awards */}
      <section className="w-full bg-gray-100 px-6 py-12 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider mb-8 relative pb-4 before:absolute before:bottom-0 before:left-0 before:w-16 before:h-1 before:bg-red-700">
          Bảng trao giải 2026
        </h2>
        <div className="bg-gradient-to-b from-white to-gray-50 p-8 rounded-lg shadow-lg border-2 border-red-700 text-center hover:translate-y-[-10px] hover:shadow-2xl transition-all cursor-pointer">
          <div className="text-5xl md:text-6xl mb-4 animate-pulse">🏆</div>
          <h3 className="text-2xl md:text-3xl font-black text-red-700 mb-4">
            Người nổi tiếng chưa được chính chủ xác nhận năm 2026
          </h3>
          <p className="text-lg md:text-xl font-bold text-gray-900">...... (Tòa soạn NEWS 24H đề cử)</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-12 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-10">
          <div>
            <h3 className="text-lg md:text-xl font-black text-red-600 uppercase tracking-wider mb-4">Về tòa soạn</h3>
            <p className="text-sm md:text-base opacity-90">
              NEWS 24H - Nơi những tin tức không phải lúc nào cũng "chính thức" nhưng lúc nào cũng thú vị.
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-black text-red-600 uppercase tracking-wider mb-4">Tuyên bố từ chối trách nhiệm</h3>
            <p className="text-sm md:text-base opacity-90">
              Mọi thông tin trong bài đều được phóng viên tự nghĩ ra. Bất cứ sự trùng hợp nào với sự thật là hoàn toàn do tình cờ. NEWS 24H không chịu trách nhiệm về bất kỳ phản ứng hay hành động nào từ độc giả.
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-black text-red-600 uppercase tracking-wider mb-4">Liên hệ</h3>
            <p className="text-sm md:text-base opacity-90">Email: hello@news24h.fake</p>
            <p className="text-sm md:text-base opacity-90">Số điện thoại: 1900-0000</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm md:text-base opacity-80 mb-2">&copy; 2026 NEWS 24H. Tất cả các quyền được bảo vệ (hoặc không).</p>
          <p className="text-sm md:text-base opacity-80">Làm với 💔 và một chút tâm huyết vì người bạn thân.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
