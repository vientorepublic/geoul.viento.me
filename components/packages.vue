<template>
  <div>
    <div class="card">
      <div class="card-body ml-1">
        <h5 class="card-title">
          <i class="fa-brands fa-ubuntu"></i> {{data['pkgs'][0]['name']}}

          <span v-if="$fetchState.pending" class="badge text-bg-secondary"
            >Loading</span
          >
          <span v-else-if="$fetchState.error" class="badge text-bg-danger"
            >Error</span
          >
          <div v-else-if="data['pkgs'][0]['status']=='success'">
            <span class="badge text-bg-success">Active</span>
          </div>
          <div v-else-if="data['pkgs'][0]['status']=='syncing'">
            <span class="badge text-bg-primary">Syncing</span>
          </div>
          <div v-else-if="data['pkgs'][0]['status']=='failed'">
            <span class="badge text-bg-danger">Failed</span>
          </div>
        </h5>
        <p class="card-text">
          {{$t('sync_cycle')}}: {{data['pkgs'][0]['sync_rate']}}
        </p>
        <p class="card-text">
          {{$t('source')}}: {{data['pkgs'][0]['rsync_addr']}}
        </p>

        <p class="card-text" v-if="$fetchState.pending">-</p>
        <p class="card-text" v-if="$fetchState.error">-</p>
        <div v-else-if="data['pkgs'][0]['status']=='loading'">
          <p class="d-inline card-text">{{$t('update')}}:</p>
          <p class="d-inline text-secondary">N/A</p>
          <p class="card-text">
            {{$t('last_time')}}:
            <span class="d-inline text-secondary">N/A</span>
          </p>
        </div>
        <div v-else-if="data['pkgs'][0]['status']=='success'">
          <p class="d-inline card-text">{{$t('update')}}:</p>
          <p class="d-inline text-success">{{$t('success')}}</p>
          <p class="card-text">
            {{$t('last_time')}}: {{data['pkgs'][0]['last_success']}}
          </p>
        </div>
        <div v-else-if="data['pkgs'][0]['status']=='syncing'">
          <p class="d-inline card-text">{{$t('update')}}:</p>
          <p class="d-inline text-primary">{{$t('syncing')}}</p>
          <p class="card-text">
            {{$t('last_time')}}: {{data['pkgs'][0]['last_success']}}
          </p>
        </div>
        <div v-else-if="data['pkgs'][0]['status']=='failed'">
          <p class="d-inline card-text">{{$t('update')}}:</p>
          <p class="d-inline text-danger">{{$t('failed')}}</p>
          <p class="card-text">
            {{$t('last_time')}}: {{data['pkgs'][0]['last_success']}}
          </p>
        </div>
        <div v-else>
          <p class="d-inline card-text">{{$t('update')}}:</p>
          <p class="d-inline text-secondary">{{$t('unknown')}}</p>
        </div>

        <a
          href="https://mirror.viento.me/ubuntu-releases"
          class="btn btn-primary"
          >{{$t('goto')}}</a
        >
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          <i class="fa-solid fa-terminal"></i> {{data['pkgs'][1]['name']}}

          <span v-if="$fetchState.pending" class="badge text-bg-secondary"
            >Loading</span
          >
          <span v-else-if="$fetchState.error" class="badge text-bg-danger"
            >Error</span
          >
          <div v-else-if="data['pkgs'][1]['status']=='success'">
            <span class="badge text-bg-success">Active</span>
          </div>
          <div v-else-if="data['pkgs'][1]['status']=='syncing'">
            <span class="badge text-bg-primary">Syncing</span>
          </div>
          <div v-else-if="data['pkgs'][1]['status']=='failed'">
            <span class="badge text-bg-danger">Failed</span>
          </div>
        </h5>
        <p class="card-text">
          {{$t('sync_cycle')}}: {{data['pkgs'][1]['sync_rate']}}
        </p>
        <p class="card-text">
          {{$t('source')}}: {{data['pkgs'][1]['rsync_addr']}}
        </p>

        <p class="card-text" v-if="$fetchState.pending">-</p>
        <p class="card-text" v-if="$fetchState.error">-</p>
        <div v-else-if="data['pkgs'][0]['status']=='loading'">
          <p class="d-inline card-text">{{$t('update')}}:</p>
          <p class="d-inline text-secondary">N/A</p>
          <p class="card-text">
            {{$t('last_time')}}:
            <span class="d-inline text-secondary">N/A</span>
          </p>
        </div>
        <div v-else-if="data['pkgs'][1]['status']=='success'">
          <p class="d-inline card-text">{{$t('update')}}:</p>
          <p class="d-inline text-success">{{$t('success')}}</p>
          <p class="card-text">
            {{$t('last_time')}}: {{data['pkgs'][1]['last_success']}}
          </p>
        </div>
        <div v-else-if="data['pkgs'][1]['status']=='syncing'">
          <p class="d-inline card-text">{{$t('update')}}:</p>
          <p class="d-inline text-primary">{{$t('syncing')}}</p>
          <p class="card-text">
            {{$t('last_time')}}: {{data['pkgs'][1]['last_success']}}
          </p>
        </div>
        <div v-else-if="data['pkgs'][1]['status']=='failed'">
          <p class="d-inline card-text">{{$t('update')}}:</p>
          <p class="d-inline text-danger">{{$t('failed')}}</p>
          <p class="card-text">
            {{$t('last_time')}}: {{data['pkgs'][1]['last_success']}}
          </p>
        </div>
        <div v-else>
          <p class="d-inline card-text">{{$t('update')}}:</p>
          <p class="d-inline text-secondary">{{$t('unknown')}}</p>
        </div>

        <a
          href="https://mirror.viento.me/putty"
          class="btn btn-primary"
          >{{$t('goto')}}</a
        >
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          <i class="fa-solid fa-file-pen"></i> {{data['pkgs'][2]['name']}}

          <span v-if="$fetchState.pending" class="badge text-bg-secondary"
            >Loading</span
          >
          <span v-else-if="$fetchState.error" class="badge text-bg-danger"
            >Error</span
          >
          <div v-else-if="data['pkgs'][2]['status']=='success'">
            <span class="badge text-bg-success">Active</span>
          </div>
          <div v-else-if="data['pkgs'][2]['status']=='syncing'">
            <span class="badge text-bg-primary">Syncing</span>
          </div>
          <div v-else-if="data['pkgs'][2]['status']=='failed'">
            <span class="badge text-bg-danger">Failed</span>
          </div>
        </h5>
        <p class="card-text">
          {{$t('sync_cycle')}}: {{data['pkgs'][2]['sync_rate']}}
        </p>
        <p class="card-text">
          {{$t('source')}}: {{data['pkgs'][2]['rsync_addr']}}
        </p>

        <p class="card-text" v-if="$fetchState.pending">-</p>
        <p class="card-text" v-if="$fetchState.error">-</p>
        <div v-else-if="data['pkgs'][0]['status']=='loading'">
          <p class="d-inline card-text">{{$t('update')}}:</p>
          <p class="d-inline text-secondary">N/A</p>
          <p class="card-text">
            {{$t('last_time')}}:
            <span class="d-inline text-secondary">N/A</span>
          </p>
        </div>
        <div v-else-if="data['pkgs'][2]['status']=='success'">
          <p class="d-inline card-text">{{$t('update')}}:</p>
          <p class="d-inline text-success">{{$t('success')}}</p>
          <p class="card-text">
            {{$t('last_time')}}: {{data['pkgs'][2]['last_success']}}
          </p>
        </div>
        <div v-else-if="data['pkgs'][2]['status']=='syncing'">
          <p class="d-inline card-text">{{$t('update')}}:</p>
          <p class="d-inline text-primary">{{$t('syncing')}}</p>
          <p class="card-text">
            {{$t('last_time')}}: {{data['pkgs'][2]['last_success']}}
          </p>
        </div>
        <div v-else-if="data['pkgs'][2]['status']=='failed'">
          <p class="d-inline card-text">{{$t('update')}}:</p>
          <p class="d-inline text-danger">{{$t('failed')}}</p>
          <p class="card-text">
            {{$t('last_time')}}: {{data['pkgs'][2]['last_success']}}
          </p>
        </div>
        <div v-else>
          <p class="d-inline card-text">{{$t('update')}}:</p>
          <p class="d-inline text-secondary">{{$t('unknown')}}</p>
        </div>

        <a
          href="https://mirror.viento.me/vim"
          class="btn btn-primary"
          >{{$t('goto')}}</a
        >
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          <i class="fa-solid fa-play"></i> {{data['pkgs'][3]['name']}}

          <span v-if="$fetchState.pending" class="badge text-bg-secondary"
            >Loading</span
          >
          <span v-else-if="$fetchState.error" class="badge text-bg-danger"
            >Error</span
          >
          <div v-else-if="data['pkgs'][3]['status']=='success'">
            <span class="badge text-bg-success">Active</span>
          </div>
          <div v-else-if="data['pkgs'][3]['status']=='syncing'">
            <span class="badge text-bg-primary">Syncing</span>
          </div>
          <div v-else-if="data['pkgs'][3]['status']=='failed'">
            <span class="badge text-bg-danger">Failed</span>
          </div>
        </h5>
        <p class="card-text">
          {{$t('sync_cycle')}}: {{data['pkgs'][3]['sync_rate']}}
        </p>
        <p class="card-text">
          {{$t('source')}}: {{data['pkgs'][3]['rsync_addr']}}
        </p>

        <p class="card-text" v-if="$fetchState.pending">-</p>
        <p class="card-text" v-if="$fetchState.error">-</p>
        <div v-else-if="data['pkgs'][0]['status']=='loading'">
          <p class="d-inline card-text">{{$t('update')}}:</p>
          <p class="d-inline text-secondary">N/A</p>
          <p class="card-text">
            {{$t('last_time')}}:
            <span class="d-inline text-secondary">N/A</span>
          </p>
        </div>
        <div v-else-if="data['pkgs'][3]['status']=='success'">
          <p class="d-inline card-text">{{$t('update')}}:</p>
          <p class="d-inline text-success">{{$t('success')}}</p>
          <p class="card-text">
            {{$t('last_time')}}: {{data['pkgs'][3]['last_success']}}
          </p>
        </div>
        <div v-else-if="data['pkgs'][3]['status']=='syncing'">
          <p class="d-inline card-text">{{$t('update')}}:</p>
          <p class="d-inline text-primary">{{$t('syncing')}}</p>
          <p class="card-text">
            {{$t('last_time')}}: {{data['pkgs'][3]['last_success']}}
          </p>
        </div>
        <div v-else-if="data['pkgs'][3]['status']=='failed'">
          <p class="d-inline card-text">{{$t('update')}}:</p>
          <p class="d-inline text-danger">{{$t('failed')}}</p>
          <p class="card-text">
            {{$t('last_time')}}: {{data['pkgs'][3]['last_success']}}
          </p>
        </div>
        <div v-else>
          <p class="d-inline card-text">{{$t('update')}}:</p>
          <p class="d-inline text-secondary">{{$t('unknown')}}</p>
        </div>

        <a
          href="https://mirror.viento.me/mplayer"
          class="btn btn-primary"
          >{{$t('goto')}}</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--secondary-background-color);
  margin: 25px;
}
.btn {
  color: #fff;
}
</style>

<script>
export default {
	data() {
		return {
			data: {
				"pkgs":[
					{
						"name":"Ubuntu-cd",
						"status":"loading",
						"last_success":"N/A",
						"log_path":null,
						"sync_rate":"N/A"
					},
					{
						"name":"PuTTY",
						"status":"loading",
						"last_success":"N/A",
						"log_path":null,
						"sync_rate":"N/A"
					},
					{
						"name":"Vim",
						"status":"loading",
						"last_success":"N/A",
						"log_path":null,
						"sync_rate":"N/A"
					},
					{
						"name":"MPlayer",
						"status":"loading",
						"last_success":"N/A",
						"log_path":null,
						"sync_rate":"N/A"
					}
				]
			}
		};
	},
	async fetch() {
		this.data = await this.$axios.get(`${this.$config.BASE_URL}${this.$config.DB_PATH}`).then(res =>
			this.data = res.data
		)
	},
	fetchOnServer: false, // CSR
}
</script>
