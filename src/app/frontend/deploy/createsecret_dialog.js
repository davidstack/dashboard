// Copyright 2017 The Kubernetes Dashboard Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import CreateSecretController from 'deploy/createsecret_controller';

/**
 * Displays new secret creation dialog.
 *
 * @param {!md.$dialog} mdDialog
 * @param {!angular.Scope.Event} event
 * @param {string} namespace - the currently selected namespace
 * @return {!angular.$q.Promise}
 */
export default function showSecretDialog(mdDialog, event, namespace) {
  return mdDialog.show({
    controller: CreateSecretController,
    controllerAs: 'ctrl',
    clickOutsideToClose: true,
    targetEvent: event,
    templateUrl: 'deploy/createsecret.html',
    locals: {
      'namespace': namespace,
    },
  });
}
