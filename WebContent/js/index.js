var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var SnowFlake = function () {
	function SnowFlake() {_classCallCheck(this, SnowFlake);
		this.x = 0;
		this.y = 0;
		this.vx = 0;
		this.vy = 0;
		this.r = 0;
		this.alpha = 0;

		this.reset();
	}_createClass(SnowFlake, [{ key: 'reset', value: function reset()

		{
			this.x = this.randBetween(0, window.innerWidth);
			this.y = this.randBetween(0, -window.innerHeight);
			this.vx = this.randBetween(-3, 3);
			this.vy = this.randBetween(2, 5);
			this.r = this.randBetween(1, 4);
			this.alpha = this.randBetween(0.1, 0.9);
		} }, { key: 'randBetween', value: function randBetween(

		min, max) {
			return min + Math.random() * (max - min);
		} }, { key: 'update', value: function update()

		{
			this.x += this.vx;
			this.y += this.vy;

			if (this.y + this.r > window.innerHeight) {
				this.reset();
			}
		} }]);return SnowFlake;}();var


Snow = function () {
	function Snow() {var _this = this;_classCallCheck(this, Snow);
		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d');

		document.body.appendChild(this.canvas);

		window.addEventListener('resize', function () {return _this.onResize();});

		this.onResize();
		this.updateBound = this.update.bind(this);
		requestAnimationFrame(this.updateBound);
		this.createSnowFlakes();
	}_createClass(Snow, [{ key: 'onResize', value: function onResize()

		{
			this.width = window.innerWidth;
			this.height = window.innerHeight;
			this.canvas.width = this.width;
			this.canvas.height = this.height;
		} }, { key: 'createSnowFlakes', value: function createSnowFlakes()

		{
			var flakes = window.innerWidth / 4;
			this.snowflakes = [];

			for (var s = 0; s < flakes; s++) {
				this.snowflakes.push(new SnowFlake());
			}
		} }, { key: 'update', value: function update()

		{
			this.ctx.clearRect(0, 0, this.width, this.height);var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {

				for (var _iterator = this.snowflakes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var flake = _step.value;
					flake.update();

					this.ctx.save();
					this.ctx.fillStyle = '#FFF';
					this.ctx.beginPath();
					this.ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
					this.ctx.closePath();
					this.ctx.globalAlpha = flake.alpha;
					this.ctx.fill();
					this.ctx.restore();
				}} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}

			requestAnimationFrame(this.updateBound);
		} }]);return Snow;}();


new Snow();