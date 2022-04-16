const socket = io();

// client-side
socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

socket.emit("join", {
    room: ROOM_CODE
});

socket.on("join", (data) => {
    console.log(data); // x8WIv7-mJelg7on_ALbx
});

socket.on("changeSlide", (data) => {
    console.log(data); // x8WIv7-mJelg7on_ALbx
    currentSlide = data;
    
    renderSlide(currentSlide);
});