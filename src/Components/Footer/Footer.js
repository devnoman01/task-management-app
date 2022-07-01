import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#ddeff0] py-2">
      <div className="max-w-6xl mx-auto">
        <div className="container border mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a className="btn btn-ghost normal-case text-base">
                <img
                  className="w-6 mr-2"
                  src="https://img.icons8.com/glyph-neue/344/todo-list.png"
                  alt=""
                />
                Task-To-Do
              </a>
              <p className="text-sm">
                Developed by{" "}
                <a href="https://github.com/devnoman01">devnoman01</a> - All
                right reserved.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a target="_blank" href="#">
                <img
                  className="w-7 h-7"
                  src="https://img.icons8.com/ios-glyphs/344/new-post.png"
                  alt=""
                />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/md-abdullahalnoman/"
              >
                <img
                  className="w-7 h-7"
                  src="https://img.icons8.com/ios-filled/452/linkedin.png"
                  alt=""
                />
              </a>
              <a target="_blank" href="https://github.com/devnoman01">
                <img
                  className="w-7 h-7"
                  src="https://img.icons8.com/ios-glyphs/344/github.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
