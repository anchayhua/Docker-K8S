docker build -t anchayhua/mi-app-nodejs .
docker push anchayhua/mi-app-nodejs 

*****************************************************

kubectl apply -f k_namespace.yaml
    kubectl config set-context --current --namespace=mi-namespace
kubectl apply -f k_deployment.yaml

kubectl apply -f k_replicaset.yaml
kubectl apply -f k_statefulset.yaml
kubectl apply -f k_daemonset.yaml
kubectl apply -f k_job.yaml

kubectl apply -f k_service.yaml

kubectl get all -n mi-namespace
    kubectl delete -n mi-namespace

    kubectl config get-contexts

*****************************************************

kubectl config view --minify | grep namespace
kubectl delete namespace <nombre_del_namespace>
    kubectl delete namespace mi-namespace

kubectl delete -f deployment.yaml

kubectl get pods --namespace=mi-namespace
kubectl get pods -n mi-namespace


*****************************************************