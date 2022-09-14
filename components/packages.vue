<template>
    <div>
        <div class="col-sm-6 p-2">
				<div class="card">
					<div class="card-body ml-1">
						<h5 class="card-title"><i class="fa-brands fa-ubuntu"></i> Ubuntu-cdimage 
						
							<span v-if="$fetchState.pending" class="badge text-bg-secondary">Loading</span>
                        	<span v-else-if="$fetchState.error" class="badge text-bg-danger">Error</span>
                        	<div v-else-if="data['pkgs'][0]['status']=='success'">
                            	<span class="badge text-bg-success">Active</span>
                        	</div>
							<div v-else-if="data['pkgs'][0]['status']=='syncing'">
								<span class="badge text-bg-primary">Syncing</span>
							</div>
							<div v-else="data['pkgs'][0]['status']=='failed'">
								<span class="badge text-bg-danger">Failed</span>
							</div>

						</h5>
						<p class="card-text">{{$t('sync_cycle')}}: {{data['pkgs'][0]['sync_rate']}}</p>
						<p class="card-text">{{$t('source')}}: rsync://kr.rsync.releases.ubuntu.com/releases/</p>

						<p class="card-text" v-if="$fetchState.pending">-</p>
						<p class="card-text" v-if="$fetchState.error">-</p>
						<div v-else-if="data['pkgs'][0]['status']=='success'">
							<p class="d-inline card-text">{{$t('update')}}: </p><p class="d-inline text-success">{{$t('success')}}</p>
							<p class="card-text">{{$t('last_time')}}: {{data['pkgs'][0]['last_success']}}</p>
						</div>
						<div v-else-if="data['pkgs'][0]['status']=='syncing'">
							<p class="d-inline card-text">{{$t('update')}}: </p><p class="d-inline text-primary">{{$t('syncing')}}</p>
							<p class="card-text">{{$t('last_time')}}: {{data['pkgs'][0]['last_success']}}</p>
						</div>
						<div v-else-if="data['pkgs'][0]['status']=='failed'">
							<p class="d-inline card-text">{{$t('update')}}: </p><p class="d-inline text-danger">{{$t('failed')}}</p>
							<p class="card-text">{{$t('last_time')}}: {{data['pkgs'][0]['last_success']}}</p>
						</div>
						<div v-else>
							<p class="d-inline card-text">{{$t('update')}}: </p><p class="d-inline text-secondary">{{$t('unknown')}}</p>
						</div>

						<a href="https://mirror.viento.me/ubuntu-releases" class="btn btn-primary">{{$t('goto')}}</a> </div>
				</div>
			</div>

			<div class="col-sm-6 p-2">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title"><i class="fa-solid fa-terminal"></i> PuTTY 
						
							<span v-if="$fetchState.pending" class="badge text-bg-secondary">Loading</span>
                        	<span v-else-if="$fetchState.error" class="badge text-bg-danger">Error</span>
                        	<div v-else-if="data['pkgs'][1]['status']=='success'">
                            	<span class="badge text-bg-success">Active</span>
                        	</div>
							<div v-else-if="data['pkgs'][1]['status']=='syncing'">
								<span class="badge text-bg-primary">Syncing</span>
							</div>
							<div v-else="data['pkgs'][1]['status']=='failed'">
								<span class="badge text-bg-danger">Failed</span>
							</div>

						</h5>
						<p class="card-text">{{$t('sync_cycle')}}: {{data['pkgs'][1]['sync_rate']}}</p>
						<p class="card-text">{{$t('source')}}: rsync://rsync.chiark.greenend.org.uk/ftp/users/sgtatham/putty-website-mirror/</p>

						<p class="card-text" v-if="$fetchState.pending">-</p>
						<p class="card-text" v-if="$fetchState.error">-</p>
						<div v-else-if="data['pkgs'][1]['status']=='success'">
							<p class="d-inline card-text">{{$t('update')}}: </p><p class="d-inline text-success">{{$t('success')}}</p>
							<p class="card-text">{{$t('last_time')}}: {{data['pkgs'][1]['last_success']}}</p>
						</div>
						<div v-else-if="data['pkgs'][1]['status']=='syncing'">
							<p class="d-inline card-text">{{$t('update')}}: </p><p class="d-inline text-primary">{{$t('syncing')}}</p>
							<p class="card-text">{{$t('last_time')}}: {{data['pkgs'][1]['last_success']}}</p>
						</div>
						<div v-else-if="data['pkgs'][1]['status']=='failed'">
							<p class="d-inline card-text">{{$t('update')}}: </p><p class="d-inline text-danger">{{$t('failed')}}</p>
							<p class="card-text">{{$t('last_time')}}: {{data['pkgs'][1]['last_success']}}</p>
						</div>
						<div v-else>
							<p class="d-inline card-text">{{$t('update')}}: </p><p class="d-inline text-secondary">{{$t('unknown')}}</p>
						</div>

						<a href="https://mirror.viento.me/putty" class="btn btn-primary">{{$t('goto')}}</a> </div>
				</div>
			</div>
			<div class="col-sm-6 p-2">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title"><i class="fa-solid fa-file-pen"></i> Vim 
						
							<span v-if="$fetchState.pending" class="badge text-bg-secondary">Loading</span>
                        	<span v-else-if="$fetchState.error" class="badge text-bg-danger">Error</span>
                        	<div v-else-if="data['pkgs'][2]['status']=='success'">
                            	<span class="badge text-bg-success">Active</span>
                        	</div>
							<div v-else-if="data['pkgs'][2]['status']=='syncing'">
								<span class="badge text-bg-primary">Syncing</span>
							</div>
							<div v-else="data['pkgs'][2]['status']=='failed'">
								<span class="badge text-bg-danger">Failed</span>
							</div>
						
						</h5>
						<p class="card-text">{{$t('sync_cycle')}}: {{data['pkgs'][2]['sync_rate']}}</p>
						<p class="card-text">{{$t('source')}}: rsync://ftp.vim.org/Vim/</p>

						<p class="card-text" v-if="$fetchState.pending">-</p>
						<p class="card-text" v-if="$fetchState.error">-</p>
						<div v-else-if="data['pkgs'][2]['status']=='success'">
							<p class="d-inline card-text">{{$t('update')}}: </p><p class="d-inline text-success">{{$t('success')}}</p>
							<p class="card-text">{{$t('last_time')}}: {{data['pkgs'][2]['last_success']}}</p>
						</div>
						<div v-else-if="data['pkgs'][2]['status']=='syncing'">
							<p class="d-inline card-text">{{$t('update')}}: </p><p class="d-inline text-primary">{{$t('syncing')}}</p>
							<p class="card-text">{{$t('last_time')}}: {{data['pkgs'][2]['last_success']}}</p>
						</div>
						<div v-else-if="data['pkgs'][2]['status']=='failed'">
							<p class="d-inline card-text">{{$t('update')}}: </p><p class="d-inline text-danger">{{$t('failed')}}</p>
							<p class="card-text">{{$t('last_time')}}: {{data['pkgs'][2]['last_success']}}</p>
						</div>
						<div v-else>
							<p class="d-inline card-text">{{$t('update')}}: </p><p class="d-inline text-secondary">{{$t('unknown')}}</p>
						</div>

						<a href="https://mirror.viento.me/vim" class="btn btn-primary">{{$t('goto')}}</a> </div>
				</div>
			</div>
			<div class="col-sm-6 p-2">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title"><i class="fa-solid fa-play"></i> MPlayer 
						
							<span v-if="$fetchState.pending" class="badge text-bg-secondary">Loading</span>
                        	<span v-else-if="$fetchState.error" class="badge text-bg-danger">Error</span>
                        	<div v-else-if="data['pkgs'][3]['status']=='success'">
                            	<span class="badge text-bg-success">Active</span>
                        	</div>
							<div v-else-if="data['pkgs'][3]['status']=='syncing'">
								<span class="badge text-bg-primary">Syncing</span>
							</div>
							<div v-else="data['pkgs'][3]['status']=='failed'">
								<span class="badge text-bg-danger">Failed</span>
							</div>
						
						</h5>
						<p class="card-text">{{$t('sync_cycle')}}: {{data['pkgs'][3]['sync_rate']}}</p>
						<p class="card-text">{{$t('source')}}: rsync://ftp1.mplayerhq.hu/ftp/</p>

						<p class="card-text" v-if="$fetchState.pending">-</p>
						<p class="card-text" v-if="$fetchState.error">-</p>
						<div v-else-if="data['pkgs'][3]['status']=='success'">
							<p class="d-inline card-text">{{$t('update')}}: </p><p class="d-inline text-success">{{$t('success')}}</p>
							<p class="card-text">{{$t('last_time')}}: {{data['pkgs'][3]['last_success']}}</p>
						</div>
						<div v-else-if="data['pkgs'][3]['status']=='syncing'">
							<p class="d-inline card-text">{{$t('update')}}: </p><p class="d-inline text-primary">{{$t('syncing')}}</p>
							<p class="card-text">{{$t('last_time')}}: {{data['pkgs'][3]['last_success']}}</p>
						</div>
						<div v-else-if="data['pkgs'][3]['status']=='failed'">
							<p class="d-inline card-text">{{$t('update')}}: </p><p class="d-inline text-danger">{{$t('failed')}}</p>
							<p class="card-text">{{$t('last_time')}}: {{data['pkgs'][3]['last_success']}}</p>
						</div>
						<div v-else>
							<p class="d-inline card-text">{{$t('update')}}: </p><p class="d-inline text-secondary">{{$t('unknown')}}</p>
						</div>

						<a href="https://mirror.viento.me/mplayer" class="btn btn-primary">{{$t('goto')}}</a> </div>
				</div>
			</div>
    </div>
</template>

<style scoped>
.card {
	background-color: var(--secondary-background-color);
}
</style>

<script>
export default {
    data() {
        return {
            data: []
        };
    },
    async fetch() {
        this.data = await fetch("https://mirror.viento.me/logs/status.json").then(res => res.json());
    },
}
</script>
