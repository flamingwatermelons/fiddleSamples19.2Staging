$(function () {

            $("#player1").igVideoPlayer({
                sources: [
                    'https://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.h264.mp4',
                    'https://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.webmvp8.webm',
                    'https://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.theora.ogv'
                ],
                width: 720,
                height: 272,
                posterUrl: 'https://jp.staging.igniteui.com/19-2/images/samples/video-player/ig-pres.png',
                fullscreen: false,
                browserControls: false,
                autohide: false,
                autoplay: false,
                autohideDelay: 2000,
                title: 'Infragistics プレゼンテーション',
                commercials: {
                    linkedCommercials: [
                    {
                        sources: [
                            "https://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_1.h264.mp4",
                            "https://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_1.webmvp8.webm",
                            "https://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_1.theora.ogv"],
                        startTime: 20,
                        title: 'Quince<br/>プレゼンテーション<br/>パート 1',
                        link: 'http://www.infragistics.com/'
                    },
                    {
                        sources: [
                            "https://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_Part3_1.h264.mp4",
                            "https://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_Part3_1.webmvp8.webm",
                            "https://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_Part3_1.theora.ogv"],
                        startTime: 100,
                        title: 'Quince<br/>プレゼンテーション<br/>パート 2',
                        link: 'https://www.infragistics.com/'
                    }],
                    adMessage: {
                        hideDelay: 13000
                    }
                }
            });
        });
        function showCommercials() {
            var alwaysPlay = $("#showCommercials").val() === "False" ? false : true;
            $("#player1").igVideoPlayer("option", "alwaysPlayCommercials", alwaysPlay);
        }