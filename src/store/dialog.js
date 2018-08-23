export default {
    state: {
        show: false,
        info: '点错地方了'
    },
    getters: {
        show: state => {
            return state.show
        },
        info: state => {
            return state.info
        }
    },
    mutations: {
        showSwitch: state => {
            state.show = !state.show
        },
        info: state => {
            state.info = '还是点错了'
        }
    },
    actions: {
        showSwitch: (context, data) => {
            if (data.type) {
                context.commit('showSwitch')
            } else {
                context.commit('info')
            }
        }
    }
}
