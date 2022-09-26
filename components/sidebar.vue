<template>
  <div class="column column-side">
    <section class="server-address">
      <h1>{{$t('address')}}</h1>
      <div>
        <code>http://mirror.viento.me</code>
        <code>https://mirror.viento.me</code>
      </div>
    </section>
    <section class="noti">
      <h1>{{$t('notice')}}</h1>
      <Timeline
        id="VientoMirror"
        sourceType="profile"
        :options="{
							tweetLimit: '3',
							theme: 'dark',
							chrome: 'noheader nofooter noscrollbar',
							lang: 'en', 
							height: '300',
						}"
      >
        <div class="item loading-6">
          <svg viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20"></circle>
          </svg>
        </div>
      </Timeline>
    </section>
    <section>
      <h1>{{$t('net_usage')}}</h1>
      <div>
        <p>{{$t('net_usage_detail_1')}}</p>
        <p>{{$t('net_usage_detail_2')}}</p>
        <a
          href="https://mirror.viento.me/webalizer"
          target="_blank"
          >{{$t('checkout')}}</a
        >
      </div>
    </section>
    <section>
      <h1>{{$t('speedtest_title')}}</h1>
      <div class="speedtest">
        <div class="description" id="$description">
          <p>
            {{$t('speedtest_detail')}}
          </p>
          <button onclick="speedtest()">{{$t('start')}}</button>
        </div>

        <div class="progress hidden" id="$progress">
          <div class="bar" id="$bar" style="width: 0%">
            <p class="percent" id="$percent"></p>
          </div>
        </div>

        <div class="result hidden" id="$result">
          <div>
            {{$t('speedtest_size')}}:
            <span id="$fileSize">N/A</span>
          </div>
          <div>
            {{$t('speedtest_elapsed')}}:
            <span id="$duration">N/A</span>
          </div>
          <div>
            {{$t('speedtest_avg')}}:
            <span id="$speed">N/A</span>
          </div>
        </div>
        <button class="restart hidden" id="$restart" onclick="speedtest()">
          {{$t('tryagain')}}
        </button>
      </div>
    </section>
    <section>
      <h1>{{$t('spec')}}</h1>
      <div>
        <table>
          <tr>
            <th>Processor</th>
            <td>S922X (ARM Cortex-A73, A53)</td>
          </tr>
          <tr>
            <th>Memory</th>
            <td>4GiB</td>
          </tr>
          <tr>
            <th>Storage</th>
            <td>512GiB</td>
          </tr>
          <tr>
            <th>Network</th>
            <td>1 × 500Mbps</td>
          </tr>
          <tr>
            <th>Location</th>
            <td>Daejeon, South Korea</td>
          </tr>
        </table>
      </div>
    </section>
    <section class="contact">
      <h1>{{$t('contect_info')}}</h1>
      <div>
        <div class="contact-div">
          <h2>{{$t('email')}}</h2>
          <a href="mailto:op@viento.me">op@viento.me</a>
        </div>

        <div class="contact-div">
          <h2 data-ts="contact.discord">{{$t('twitter')}}</h2>
          <a href="https://twitter.com/VientoMirror" target="_blank"
            >@VientoMirror</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.app section {
  border-radius: 5px;
  width: 400px;
  margin: 1.5rem auto;
  padding: 2rem 1.5rem;
  background-color: var(--secondary-color);
}
.app .column {
  flex: 8;
  margin: 1rem;
}
.app .column-side {
  flex: 4;
}
.app .column p {
  margin: 0.6rem 0;
}
.app .server-detail {
  text-align: left;
}
.app .server-address div {
  display: flex;
  flex-direction: column;
  padding: 1rem;

  border-radius: 5px;
  background-color: var(--secondary-background-color);
}

.app .server-address code {
  margin: 0.5rem;
  font-family: D2Coding;
  color: #fff;
}
.app .speedtest div {
  transition: 0.3s;
}

.hidden {
  opacity: 0%;
  visibility: hidden;
  height: 0 !important;
}

.app .speedtest p {
  margin-bottom: 1rem;
}

.app .speedtest .progress {
  padding: 0;
  width: 100%;
  height: 1.2rem;
  overflow: hidden;
  background: var(--secondary-background-color);
  border-radius: 5px;
}

.app .speedtest .bar {
  position: relative;
  float: left;
  min-width: 1%;
  height: 100%;
  background: var(--primary-color);
}

.app .speedtest .percent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-size: 0.8rem;
  color: white;
}

.app .speedtest .restart {
  margin: 0;
}

.app .speedtest .restart:not(.hidden) {
  margin-top: 1rem;
}

.app .speedtest .result div {
  margin: 0.25rem 0;
}

.app .speedtest .result div > span:not(.name) {
  color: var(--primary-color-1);
}

.app button {
  transition: background-color 0.3s ease;
  border: none;
  border-radius: 5px;
  background-color: var(--primary-color);
  padding: 0.7rem 1rem;
  font-size: 0.9rem;
  outline: none;
  cursor: pointer;
  color: var(--text-color);
  font-weight: 600;
}
.app button:hover {
  background-color: var(--primary-color-1);
}
.app .server-address table {
  width: 100%;
}
.app .server-address th,
td {
  padding: 0.35rem;
}
.app .noti iframe {
  position: static;
  visibility: visible;
  width: 100% !important;
  display: block;
  flex-grow: 1;
  border-radius: 10px;
}
.loading-6 svg {
  width: 3.75em;
  transform-origin: center;
  animation: rotate 2s linear infinite;
}
.loading-6 circle {
  fill: none;
  stroke: #fc2f70;
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash 1s ease-in-out infinite;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}
h1 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.app .contact h2 {
  font-size: 1.25rem;
  margin: 0;
  margin-bottom: 0.5rem;
}
.app .contact .contact-div {
  margin-bottom: 1.5rem;
}
</style>

<script>
import { Tweet, Moment, Timeline } from 'vue-tweet-embed';
export default {
	components: { Tweet, Moment, Timeline },
}
</script>
