<template>
	<div><dv-loading>Loading...</dv-loading>
	<dv-border-box-11 title="FENZHIYUNctf大赛" style="height:800px;">
		<dv-decoration-1 style="width:800px;height:800px;" />
	</dv-border-box-11>
	<dv-decoration-9 style="width:150px;height:150px;">66%</dv-decoration-9>
	<dv-decoration-12 style="width:150px;height:150px; "/>
	<dv-flyline-chart :config="config" style="width:100%;height:100%;" />

	</div>
</template>
<script>
	export default {
	  centerPoint: [0.48, 0.35],
	  points: [
	    [0.52, 0.23],
	    [0.43, 0.29],
	    [0.59, 0.35],
	    [0.53, 0.47],
	    [0.45, 0.54],
	    [0.36, 0.38],
	    [0.62, 0.55],
	    [0.56, 0.56],
	    [0.37, 0.66],
	    [0.55, 0.81],
	    [0.55, 0.67],
	    [0.37, 0.29],
	    [0.20, 0.36],
	    [0.76, 0.41],
	    [0.59, 0.18],
	    [0.68, 0.17],
	    [0.59, 0.10]
	  ],
	  bgImgUrl: '/img/flylineChart/map.jpg'
	}
	</script>
	