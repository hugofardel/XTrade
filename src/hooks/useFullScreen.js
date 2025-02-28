function useFullScreen(ref) {
	function toggleFullScreen() {
		if (!ref.current.fullscreenElement) {
			ref.current.requestFullscreen();
		} else if (ref.current.exitFullscreen) {
			ref.current.exitFullscreen();
		}
	}

	return { toggleFullScreen };
}

export default useFullScreen;
